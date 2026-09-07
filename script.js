// Sample Inventory Data (Unsplash placeholder images)
const products = [
    { id: 1, name: "Minimalist Leather Backpack", price: 79.99, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80" },
    { id: 2, name: "Wireless Headphones", price: 149.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 3, name: "Stainless Steel Water Bottle", price: 24.99, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80" },
    { id: 4, name: "Mechanical Keyboard", price: 89.99, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80" },
    { id: 5, name: "Smart Fitness Tracker", price: 119.99, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80" },
    { id: 6, name: "Scented Soy Candle Set", price: 18.99, image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&q=80" }
];

// Load Cart state from LocalStorage on page load
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM References
const productList = document.getElementById('product-list');
const cartIconBtn = document.getElementById('cart-icon-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Initialize Product Grid Layout
function displayProducts() {
    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Slide-out Drawer Panel Controls
cartIconBtn.addEventListener('click', () => cartSidebar.classList.add('open'));
closeCartBtn.addEventListener('click', () => cartSidebar.classList.remove('open'));

// Append/Increment Items to state
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existingItemIndex = cart.findIndex(item => item.id === productId);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
};

// Remove single item completely
window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
};

// Modify item counts (increment / decrement buttons)
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

// Refresh Sidebar state and cache data
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartTotals();
}

// Generate the visual items list inside the sidebar
function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
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
        cartItemsContainer.appendChild(cartItem);
    });
}

// Re-calculate quantities and global pricing total
function updateCartTotals() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice.toFixed(2);
}

// Handle checkout simulation
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is currently empty.');
        return;
    }
    alert('Thank you for your purchase! (This is a mock checkout simulation).');
    cart = [];
    updateCart();
    cartSidebar.classList.remove('open');
});

// App Startup
displayProducts();
updateCart();
