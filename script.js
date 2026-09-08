// Expanded Inventory Data Structure
const products = [
    { 
        id: 1, 
        name: "Minimalist Leather Backpack", 
        price: 79.99, 
        rating: 5,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80",
        category: "Bags",
        description: "An elegant, handcrafted minimalist backpack made of premium water-resistant full-grain leather. Built to hold your 15-inch laptop, accessories, and essentials.",
        features: ["Genuine full-grain leather", "Water-resistant interior lining", "Hidden anti-theft zipper layout", "Padded 15-inch sleeve section"],
        deliveryDays: 3
    },
    { 
        id: 2, 
        name: "Wireless ANC Headphones", 
        price: 149.99, 
        rating: 4,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        category: "Electronics",
        description: "High-fidelity over-ear headphones with custom active noise-canceling. Perfect for remote work, long flights, and pure acoustic enjoyment.",
        features: ["Active Noise Canceling (ANC)", "Up to 40 hours wireless playtime", "Premium memory foam cushions", "Low latency Bluetooth connection"],
        deliveryDays: 2
    },
    { 
        id: 3, 
        name: "Stainless Steel Water Bottle", 
        price: 24.99, 
        rating: 5,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
        category: "Lifestyle",
        description: "Double-walled vacuum insulated thermal bottle designed to preserve liquid temperatures. Kept cold for 24 hours or hot for 12.",
        features: ["BPA-free construction", "18/8 food-grade stainless steel", "Leakproof sealing lid design", "Condensation-free powder finish"],
        deliveryDays: 4
    },
    { 
        id: 4, 
        name: "Mechanical Keyboard", 
        price: 89.99, 
        rating: 4,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
        category: "Electronics",
        description: "Hot-swappable tactile mechanical keyboard featuring quiet switches and programmable macro key layers.",
        features: ["PBT double-shot keycaps", "Custom customizable RGB lighting", "Compact 75% mechanical layout", "Braided USB-C interface cable"],
        deliveryDays: 3
    },
    { 
        id: 5, 
        name: "Smart Fitness Watch", 
        price: 119.99, 
        rating: 4,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80",
        category: "Electronics",
        description: "A lightweight lifestyle smart band tracking dynamic daily vitals, sleep, workout patterns, and cellular notifications.",
        features: ["Integrated biological sensor array", "IP68 water resistant build", "7-day battery cycle capacity", "Bluetooth notification synchronization"],
        deliveryDays: 2
    },
    { 
        id: 6, 
        name: "Scented Soy Candle Set", 
        price: 18.99, 
        rating: 5,
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&q=80",
        category: "Lifestyle",
        description: "An aromatic gift set containing three soy wax candles scented with pure plant extracts and essential oils.",
        features: ["100% natural soy wax bases", "Eco-friendly natural wood wicks", "Up to 30 hours burn duration each", "Recyclable amber glass container sets"],
        deliveryDays: 5
    }
];

// Load Session State
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let activeCategory = 'All';
let searchQuery = '';
let activeDiscountPercentage = 0;

// DOM Selectors
const productList = document.getElementById('product-list');
const cartIconBtn = document.getElementById('cart-icon-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const navMenu = document.getElementById('nav-menu');

// Storefront Search & Filter DOM Targets
const searchInput = document.getElementById('search-input');
const filtersContainer = document.getElementById('category-filters-container');

// --- Global Header rendering ---
function updateNavigation() {
    if (!navMenu) return;
    navMenu.innerHTML = `<a href="index.html">Home</a>`;
    if (currentUser) {
        navMenu.innerHTML += `
            <a href="profile.html">Dashboard</a>
            <a href="#" onclick="logoutUser()">Log Out</a>
        `;
    } else {
        navMenu.innerHTML += `<a href="auth.html">Login / Signup</a>`;
    }
}

// --- Cart sidebar drawer visibility toggle ---
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

// --- Generate category filter pills dynamically ---
function buildFilterUI() {
    if (!filtersContainer) return;
    const categories = ['All', ...new Set(products.map(p => p.category))];
    filtersContainer.innerHTML = '';
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.classList.add('filter-btn');
        if (category === activeCategory) btn.classList.add('active');
        btn.textContent = category;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = category;
            displayProducts();
        });
        filtersContainer.appendChild(btn);
    });
}

// --- Dynamic Catalog Rendering (Grid layout) ---
function displayProducts() {
    if (!productList) return;
    productList.innerHTML = '';

    // Apply Search and Category filters
    const filtered = products.filter(product => {
        const matchesCategory = (activeCategory === 'All' || product.category === activeCategory);
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              product.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        productList.innerHTML = `<p style="text-align:center; grid-column:1/-1; padding:3rem; color:#7f8c8d;">No matches found.</p>`;
        return;
    }

    filtered.forEach(product => {
        const isSaved = currentUser && currentUser.wishlist && currentUser.wishlist.includes(product.id);
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Render dynamic rating stars
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += `<i class="${i <= product.rating ? 'fas' : 'far'} fa-star"></i>`;
        }

        card.innerHTML = `
            <button class="wishlist-btn ${isSaved ? 'active' : ''}" onclick="toggleWishlist(${product.id}); event.stopPropagation();">
                <i class="fas fa-heart"></i>
            </button>
            <img src="${product.image}" alt="${product.name}" class="product-img" onclick="showProductDetails(${product.id})">
            <div class="product-info">
                <div class="product-rating">${starsHtml}</div>
                <h3 class="product-title" onclick="showProductDetails(${product.id})">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productList.appendChild(card);
    });
}

// Trigger filter calculations from typing in search bar
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        displayProducts();
    });
}

// --- Dynamic Product Details Pop-up (Dynamic Similar Items and Delivery Dates) ---
const detailsModal = document.getElementById('details-modal');
const closeDetailsBtn = document.getElementById('close-details-btn');

window.showProductDetails = function(productId) {
    if (!detailsModal) return;
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Build delivery date calculation
    const today = new Date();
    today.setDate(today.getDate() + product.deliveryDays);
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const dateStr = today.toLocaleDateString('en-US', options);

    // Populate Modal elements
    document.getElementById('modal-detail-img').src = product.image;
    document.getElementById('modal-detail-title').textContent = product.name;
    document.getElementById('modal-detail-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modal-detail-delivery').textContent = dateStr;
    document.getElementById('modal-detail-desc').textContent = product.description;

    // Render features list
    const featuresList = document.getElementById('modal-detail-features');
    featuresList.innerHTML = '';
    product.features.forEach(feat => {
        const li = document.createElement('li');
        li.textContent = feat;
        featuresList.appendChild(li);
    });

    // Populate rating stars
    const ratingDiv = document.getElementById('modal-detail-rating');
    ratingDiv.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        ratingDiv.innerHTML += `<i class="${i <= product.rating ? 'fas' : 'far'} fa-star"></i>`;
    }

    // Connect detail page primary action button
    const addBtn = document.getElementById('modal-detail-add-btn');
    addBtn.onclick = () => {
        addToCart(product.id);
        detailsModal.classList.remove('open');
    };

    // Calculate and render dynamic recommendations
    renderSimilarProducts(product);

    detailsModal.classList.add('open');
};

if (closeDetailsBtn) {
    closeDetailsBtn.addEventListener('click', () => detailsModal.classList.remove('open'));
}

// --- Recommendation Algorithm (Match items in same Category) ---
function renderSimilarProducts(currentProduct) {
    const similarGrid = document.getElementById('similar-products-grid');
    if (!similarGrid) return;
    similarGrid.innerHTML = '';

    // Filter matching categories, excluding the currently open product
    const matches = products.filter(p => p.category === currentProduct.category && p.id !== currentProduct.id);

    if (matches.length === 0) {
        similarGrid.innerHTML = `<p style="color:#7f8c8d; font-size:0.9rem;">No similar items available in this category.</p>`;
        return;
    }

    // Display first 3 matches
    matches.slice(0, 3).forEach(product => {
        const recCard = document.createElement('div');
        recCard.classList.add('product-card');
        recCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img" style="height:150px;" onclick="showProductDetails(${product.id})">
            <div class="product-info" style="padding:1rem;">
                <h4 class="product-title" style="font-size:0.95rem;" onclick="showProductDetails(${product.id})">${product.name}</h4>
                <p class="product-price" style="margin-bottom:0.8rem; font-size:0.95rem;">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" style="padding:0.5rem; font-size:0.85rem;">Add to Cart</button>
            </div>
        `;
        similarGrid.appendChild(recCard);
    });
}

// --- Toggle Wishlist ---
window.toggleWishlist = function(productId) {
    if (!currentUser) {
        alert("Please log in or sign up to add items to your wishlist.");
        window.location.href = "auth.html";
        return;
    }
    if (!currentUser.wishlist) currentUser.wishlist = [];
    const idx = currentUser.wishlist.indexOf(productId);
    if (idx > -1) {
        currentUser.wishlist.splice(idx, 1);
    } else {
        currentUser.wishlist.push(productId);
    }
    saveUserData();
    displayProducts();
    if (window.location.pathname.includes('profile.html')) renderProfilePage();
};

// --- Cart Operations ---
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
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
        `;
        cartItemsContainer.appendChild(row);
    });

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartCount) cartCount.textContent = totalItems;
    if (cartTotal) cartTotal.textContent = totalPrice.toFixed(2);
}

// --- Interactive Checkout and Coupon Validation ---
const checkoutModal = document.getElementById('checkout-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const checkoutForm = document.getElementById('checkout-form');
const cardDetailsSection = document.getElementById('card-details-section');
const paypalSection = document.getElementById('paypal-section');
const payNowBtn = document.getElementById('pay-now-btn');
const couponInput = document.getElementById('coupon-input');
const applyCouponBtn = document.getElementById('apply-coupon-btn');

const methodCardBtn = document.getElementById('method-card');
const methodPaypalBtn = document.getElementById('method-paypal');

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("Your shopping cart is empty!");
            return;
        }
        if (!currentUser) {
            alert("You must log in to checkout.");
            window.location.href = "auth.html";
            return;
        }
        if (cartSidebar) cartSidebar.classList.remove('open');
        setTimeout(() => cartSidebar.style.display = 'none', 300);
        
        activeDiscountPercentage = 0; // reset coupon discounts
        if (couponInput) couponInput.value = '';
        checkoutModal.classList.add('open');
        renderCheckoutSummary();
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => checkoutModal.classList.remove('open'));
}

// Toggle Payment Methods
if (methodCardBtn && methodPaypalBtn) {
    methodCardBtn.addEventListener('click', () => {
        methodCardBtn.classList.add('active');
        methodPaypalBtn.classList.remove('active');
        cardDetailsSection.style.display = 'block';
        paypalSection.style.display = 'none';
        payNowBtn.textContent = "Pay & Place Order";
        toggleCardInputsRequired(true);
    });
    methodPaypalBtn.addEventListener('click', () => {
        methodPaypalBtn.classList.add('active');
        methodCardBtn.classList.remove('active');
        cardDetailsSection.style.display = 'none';
        paypalSection.style.display = 'block';
        payNowBtn.textContent = "Proceed to PayPal";
        toggleCardInputsRequired(false);
    });
}

function toggleCardInputsRequired(isRequired) {
    const nameInput = document.getElementById('card-name');
    const numberInput = document.getElementById('card-number');
    const expiryInput = document.getElementById('card-expiry');
    const cvvInput = document.getElementById('card-cvv');
    if (nameInput && numberInput && expiryInput && cvvInput) {
        nameInput.required = isRequired;
        numberInput.required = isRequired;
        expiryInput.required = isRequired;
        cvvInput.required = isRequired;
    }
}

// Apply 10% Discount rule
if (applyCouponBtn) {
    applyCouponBtn.addEventListener('click', () => {
        if (couponInput.value.trim().toUpperCase() === 'SAVE10') {
            activeDiscountPercentage = 10;
            alert("Coupon 'SAVE10' applied successfully! 10% has been deducted from your total.");
            renderCheckoutSummary();
        } else {
            alert("Invalid coupon code.");
        }
    });
}

// Live card input formatting rules
const cardNumField = document.getElementById('card-number');
if (cardNumField) {
    cardNumField.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        val = val.match(/.{1,4}/g)?.join(' ') || val;
        e.target.value = val;
    });
}

const cardExpField = document.getElementById('card-expiry');
if (cardExpField) {
    cardExpField.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        if (val.length > 2) {
            val = val.substring(0, 2) + '/' + val.substring(2, 4);
        }
        e.target.value = val;
    });
}

function renderCheckoutSummary() {
    const summaryItems = document.getElementById('summary-items');
    const summaryPrice = document.getElementById('summary-price');
    if (!summaryItems || !summaryPrice) return;

    summaryItems.innerHTML = '';
    cart.forEach(item => {
        const row = document.createElement('div');
        row.classList.add('summary-item-row');
        row.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        summaryItems.appendChild(row);
    });

    let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (activeDiscountPercentage > 0) {
        const deduction = totalPrice * (activeDiscountPercentage / 100);
        totalPrice = totalPrice - deduction;
        
        const discountRow = document.createElement('div');
        discountRow.classList.add('summary-item-row');
        discountRow.style.color = '#e74c3c';
        discountRow.style.fontWeight = 'bold';
        discountRow.innerHTML = `
            <span>Discount (SAVE10)</span>
            <span>-$${deduction.toFixed(2)}</span>
        `;
        summaryItems.appendChild(discountRow);
    }

    summaryPrice.textContent = totalPrice.toFixed(2);
}

// Checkout Form Submission & History generation
if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        if (activeDiscountPercentage > 0) {
            totalPrice = totalPrice - (totalPrice * (activeDiscountPercentage / 100));
        }

        const newOrder = {
            id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
            date: new Date().toLocaleDateString(),
            timestamp: Date.now(), // used to calculate tracking timeline states
            itemCount: totalItems,
            total: totalPrice.toFixed(2),
            itemNames: cart.map(i => `${i.name} (${i.quantity})`).join(', ')
        };

        if (!currentUser.orders) currentUser.orders = [];
        currentUser.orders.push(newOrder);
        saveUserData();

        cart = [];
        updateCart();

        checkoutModal.classList.remove('open');
        alert("Payment Approved! Order created and tracked in Dashboard.");
        window.location.href = "profile.html";
    });
}

function saveUserData() {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    const idx = users.findIndex(u => u.email === currentUser.email);
    if (idx > -1) {
        users[idx] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
}

window.logoutUser = function() {
    localStorage.removeItem('currentUser');
    window.location.href = "index.html";
};

// --- Profile Page Calculations ---
function renderProfilePage() {
    if (!window.location.pathname.includes('profile.html')) return;
    if (!currentUser) {
        alert("Please log in to access your profile dashboard.");
        window.location.href = "auth.html";
        return;
    }

    document.getElementById('user-display-name').textContent = currentUser.name;

    // Render Order History Rows with dynamic Tracking buttons
    const tableBody = document.getElementById('order-history-rows');
    if (tableBody) {
        tableBody.innerHTML = '';
        if (!currentUser.orders || currentUser.orders.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;">No past orders logged yet.</td></tr>`;
        } else {
            [...currentUser.orders].reverse().forEach(order => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>${order.id}</strong></td>
                    <td>${order.date}</td>
                    <td>${order.itemNames}</td>
                    <td><strong>$${order.total}</strong></td>
                    <td><button class="track-order-btn" onclick="openOrderTracker('${order.id}')">Track</button></td>
                `;
                tableBody.appendChild(tr);
            });
        }
    }

    // Render profile wishlist
    const wishlistGrid = document.getElementById('wishlist-grid');
    if (wishlistGrid) {
        wishlistGrid.innerHTML = '';
        if (!currentUser.wishlist || currentUser.wishlist.length === 0) {
            wishlistGrid.innerHTML = `<p style="text-align:center; width:100%; grid-column:1/-1; padding:2rem; color:#7f8c8d;">You have not saved any products to your wishlist yet.</p>`;
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
                        <img src="${product.image}" alt="${product.name}" class="product-img" onclick="showProductDetails(${product.id})">
                        <div class="product-info">
                            <h3 class="product-title" onclick="showProductDetails(${product.id})">${product.name}</h3>
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

// --- Live Order Tracking Logic (Order Timeline) ---
const trackingModal = document.getElementById('tracking-modal');
const closeTrackingBtn = document.getElementById('close-tracking-btn');

window.openOrderTracker = function(orderId) {
    if (!trackingModal) return;
    const order = currentUser.orders.find(o => o.id === orderId);
    if (!order) return;

    document.getElementById('tracking-order-title').textContent = `Tracking Order: ${order.id}`;

    // Calculate elapsed tracking state from the time the order was placed
    const elapsedSeconds = Math.floor((Date.now() - order.timestamp) / 1000);
    
    let stepActiveIndex = 1; // Default state: Placed
    let statusText = "Order successfully created. Handing off to fulfillment center.";

    if (elapsedSeconds >= 120) { // Over 2 minutes
        stepActiveIndex = 5; // Delivered
        statusText = "Package delivered! Left at front porch/doorbox.";
    } else if (elapsedSeconds >= 80) { // Over 1.3 minutes
        stepActiveIndex = 4; // Out for Delivery
        statusText = "Local driver carrying package. Arriving shortly.";
    } else if (elapsedSeconds >= 45) { // Over 45 seconds
        stepActiveIndex = 3; // Shipped
        statusText = "Package left carrier facility and is in transit.";
    } else if (elapsedSeconds >= 15) { // Over 15 seconds
        stepActiveIndex = 2; // Processing
        statusText = "Staff packing product items at main warehouse.";
    }

    // Set Timeline stepper CSS states
    const stepsCount = 5;
    const progressWidth = ((stepActiveIndex - 1) / (stepsCount - 1)) * 100;
    document.getElementById('tracking-progress-bar').style.width = `${progressWidth}%`;

    // Apply classes dynamically across indicators
    for (let i = 1; i <= stepsCount; i++) {
        const node = document.getElementById(`step-${i}`);
        node.classList.remove('active', 'completed');
        if (i < stepActiveIndex) {
            node.classList.add('completed');
        } else if (i === stepActiveIndex) {
            node.classList.add('active');
        }
    }

    document.getElementById('tracking-status-text').textContent = statusText;
    trackingModal.classList.add('open');
};

if (closeTrackingBtn) {
    closeTrackingBtn.addEventListener('click', () => trackingModal.classList.remove('open'));
}

// --- Init Application Flow ---
updateNavigation();
buildFilterUI();
displayProducts();
renderCart();
renderProfilePage();
