// Base Store Inventory (must keep IDs unique and matching across logic elements)
const products = [
    { id: 1, name: "Minimalist Leather Backpack", price: 79.99, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80" },
    { id: 2, name: "Wireless Headphones", price: 149.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 3, name: "Stainless Steel Water Bottle", price: 24.99, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80" },
    { id: 4, name: "Mechanical Keyboard", price: 89.99, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80" },
    { id: 5, name: "Smart Fitness Tracker", price: 119.99, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80" },
    { id: 6, name: "Scented Soy Candle Set", price: 18.99, image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&q=80" }
];

// Persistent State Storage
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Element Targets
const productList = document.getElementById('product-list');
const cartIconBtn = document.getElementById('cart-icon-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const navMenu = document.getElementById('nav-menu');

// --- Navigation Render ---
function updateNavigation() {
    if (!navMenu) return;
    
    // Clear dynamic portion of navigation
    navMenu.innerHTML = `<a href="index.html">Home</a>`;
    
    if (currentUser) {
        navMenu.innerHTML += `
            <a href="profile.html">Dashboard</a>
            <a href="#" onclick="logoutUser()">Log Out</a>
        `;
    } else {
        navMenu.innerHTML += `
            <a href="auth.html">Login / Signup</a>
        `;
    }
}

// --- Cart Panel UI controls ---
if (cartIconBtn && closeCartBtn && cartSidebar) {
    cartIconBtn.addEventListener('click', () => {
        cartSidebar.style.display = 'flex';
        setTimeout(() => cartSidebar.classList.add('open'), 10);
    });
    closeCartBtn.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
        setTimeout(() => cartSidebar.style.display = 'none', 300);
    });
}

// --- Dynamic Catalog Rendering (Index Page) ---
function displayProducts() {
    if (!productList) return;
    productList.innerHTML = '';
    
    products.forEach(product => {
        const isSaved = currentUser && currentUser.wishlist && currentUser.wishlist.includes(product.id);
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <button class="wishlist-btn ${isSaved ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                <i class="fas fa-heart"></i>
            </button>
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productList.appendChild(card);
    });
}

// --- Wishlist Interaction Logic ---
window.toggleWishlist = function(productId) {
    if (!currentUser) {
        alert("Please log in or sign up to add items to your wishlist.");
        window.location.href = "auth.html";
        return;
    }

    if (!currentUser.wishlist) {
        currentUser.wishlist = [];
    }

    const index = currentUser.wishlist.indexOf(productId);
    if (index > -1) {
        currentUser.wishlist.splice(index, 1);
    } else {
        currentUser.wishlist.push(productId);
    }

    // Sync session and accounts array
    saveUserData();
    displayProducts();
    if (window.location.pathname.includes('profile.html')) {
        renderProfilePage();
    }
};

// --- Cart Modification Logic ---
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
};

window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
};

window.changeQuantity = function(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
};

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const row = document.createElement('div');
        row.classList.add('cart-item');
        row.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                    <button class="cart-item-qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="cart-item-qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        cartItemsContainer.appendChild(row);
    });

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartCount) cartCount.textContent = totalItems;
    if (cartTotal) cartTotal.textContent = totalPrice.toFixed(2);
}

// --- Checkout Order Logic ---
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("Your shopping cart is empty!");
            return;
        }

        if (!currentUser) {
            alert("You must login or signup to complete your purchase.");
            window.location.href = "auth.html";
            return;
        }

        // Generate Simulated Order Object
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        const newOrder = {
            id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
            date: new Date().toLocaleDateString(),
            itemCount: totalItems,
            total: totalPrice.toFixed(2),
            status: "Processing"
        };

        if (!currentUser.orders) {
            currentUser.orders = [];
        }

        currentUser.orders.push(newOrder);
        saveUserData();

        // Clear active cart state
        cart = [];
        updateCart();
        
        alert("Thank you! Your order was placed and is now logged inside your Dashboard.");
        window.location.href = "profile.html";
    });
}

// Helper to update active profiles in database
function saveUserData() {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex > -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// --- Session Termination ---
window.logoutUser = function() {
    localStorage.removeItem('currentUser');
    window.location.href = "index.html";
};

// --- Authentication Tab Switching ---
window.switchAuthTab = function(tabName) {
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');
    const formLogin = document.getElementById('login-form');
    const formSignup = document.getElementById('signup-form');

    if (tabName === 'login') {
        tabLogin.classList.add('active');
        tabSignup.classList.remove('active');
        formLogin.classList.add('active');
        formSignup.classList.remove('active');
    } else {
        tabLogin.classList.remove('active');
        tabSignup.classList.add('active');
        formLogin.classList.remove('active');
        formSignup.classList.add('active');
    }
};

// --- Registration Forms ---
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value;

        if (users.find(u => u.email === email)) {
            alert("An account with this email address already exists.");
            return;
        }

        const newUser = {
            name,
            email,
            password,
            wishlist: [],
            orders: []
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        alert("Account registration successful!");
        window.location.href = "profile.html";
    });
}

// --- Sign-in Submission Handling ---
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;

        const matchedUser = users.find(u => u.email === email && u.password === password);

        if (!matchedUser) {
            alert("Invalid email or password combination.");
            return;
        }

        localStorage.setItem('currentUser', JSON.stringify(matchedUser));
        alert("Welcome back!");
        window.location.href = "profile.html";
    });
}

// --- Dashboard Population (Profile Page) ---
function renderProfilePage() {
    if (!window.location.pathname.includes('profile.html')) return;
    
    if (!currentUser) {
        alert("Please log in to access your profile dashboard.");
        window.location.href = "auth.html";
        return;
    }

    document.getElementById('user-display-name').textContent = currentUser.name;

    // Render Order history records
    const tableBody = document.getElementById('order-history-rows');
    if (tableBody) {
        tableBody.innerHTML = '';
        if (!currentUser.orders || currentUser.orders.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;">No past orders logged yet.</td></tr>`;
        } else {
            // Display orders newest first
            [...currentUser.orders].reverse().forEach(order => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><strong>${order.id}</strong></td>
                    <td>${order.date}</td>
                    <td>${order.itemCount} items</td>
                    <td><strong>$${order.total}</strong></td>
                    <td><span class="status-badge status-processing">${order.status}</span></td>
                `;
                tableBody.appendChild(row);
            });
        }
    }

    // Render Wishlist details
    const wishlistGrid = document.getElementById('wishlist-grid');
    if (wishlistGrid) {
        wishlistGrid.innerHTML = '';
        if (!currentUser.wishlist || currentUser.wishlist.length === 0) {
            wishlistGrid.innerHTML = `<p style="text-align:center; width:100%; grid-column: 1/-1; padding: 2rem; color: #7f8c8d;">You have not saved any products to your wishlist yet.</p>`;
        } else {
            currentUser.wishlist.forEach(id => {
                const product = products.find(p => p.id === id);
                if (product) {
                    const card = document.createElement('div');
                    card.classList.add('product-card');
                    card.innerHTML = `
                        <button class="wishlist-btn active" onclick="toggleWishlist(${product.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                        <img src="${product.image}" alt="${product.name}" class="product-img">
                        <div class="product-info">
                            <h3 class="product-title">${product.name}</h3>
                            <p class="product-price">$${product.price.toFixed(2)}</p>
                            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                        </div>
                    `;
                    wishlistGrid.appendChild(card);
                }
            });
        }
    }
}

// --- App Bootstrap ---
updateNavigation();
displayProducts();
renderCart();
renderProfilePage();
