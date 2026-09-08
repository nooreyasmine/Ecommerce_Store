// --- 1. PRODUCT DATABASE ---
const PRODUCTS = [
  // CATEGORY: Electronics
  {
    id: 1, name: "Premium Wireless Headphones", category: "Electronics", price: 199.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description: "Immersive over-ear headphones with premium grade spatial sound profiles.",
    features: ["Active Noise Cancellation (ANC)", "Up to 40 hours wireless playback", "Seamless Bluetooth 5.2 connectivity"],
    deliveryTime: "2-3 business days"
  },
  {
    id: 2, name: "Flagship Smartphone", category: "Electronics", price: 899.00,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    description: "Next-generation cellular speeds coupled with ultra-clear camera technology.",
    features: ["6.7-inch dynamic OLED display", "128GB high-speed memory storage", "Advanced triple-camera alignment"],
    deliveryTime: "1-2 business days"
  },
  {
    id: 3, name: "Sleek Ultrabook Laptop", category: "Electronics", price: 1299.00,
    image: "https://images.unsplash.com/photo-1496181130204-755241524eab?w=500",
    description: "Work on the go with lightweight performance powered by robust architectures.",
    features: ["16GB LPDDR5 RAM & 512GB NVMe SSD", "High-performance Multi-Core processor", "All-day lightweight chassis battery life"],
    deliveryTime: "3-4 business days"
  },
  {
    id: 4, name: "Minimalist Smartwatch", category: "Electronics", price: 249.00,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description: "Keep track of active physical routines and system notifications visually.",
    features: ["Continuous biometric health tracking", "Water-resistant casing up to 50 meters", "7-day operating runtime on single charge"],
    deliveryTime: "2-3 business days"
  },
  {
    id: 5, name: "Portable Bluetooth Speaker", category: "Electronics", price: 79.00,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    description: "Uncompromised acoustics engineered inside a rugged dynamic structure.",
    features: ["IPX7 certified fully waterproof", "Optimized deep frequency bass radiators", "Continuous 12-hour acoustic runtime"],
    deliveryTime: "2-3 business days"
  },

  // CATEGORY: Fashion
  {
    id: 6, name: "Classic Leather Jacket", category: "Fashion", price: 149.00,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    description: "Handcrafted outer layers offering protection and lasting design aesthetics.",
    features: ["100% Genuine lambskin leather structure", "Polyester insulated thermal layer lining", "Tailored standard-fit design"],
    deliveryTime: "3-5 business days"
  },
  {
    id: 7, name: "Premium Denim Jeans", category: "Fashion", price: 59.00,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    description: "Flexible performance textiles optimized for versatile daily wear.",
    features: ["Stretch-blend standard cotton fiber mix", "Reinforced triple-stitch structural seams", "Classic, versatile, regular rise"],
    deliveryTime: "2-4 business days"
  },
  {
    id: 8, name: "Minimalist Canvas Sneakers", category: "Fashion", price: 69.00,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    description: "Clean styling details matched with highly responsive interior cushioning.",
    features: ["Breathable dual-layered structural canvas", "Ergonomic inner lining memory support", "High-grip durable vulcanized rubber outsoles"],
    deliveryTime: "2-4 business days"
  },
  {
    id: 9, name: "Chronograph Wristwatch", category: "Fashion", price: 189.00,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
    description: "High-grade mechanical design that provides stylish precision timing.",
    features: ["Reliable quartz mechanics", "Top-grain genuine leather strap band", "Up to 30 meters water resistance depth"],
    deliveryTime: "3-5 business days"
  },
  {
    id: 10, name: "Vintage Graphic Tee", category: "Fashion", price: 29.00,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500",
    description: "Pre-washed premium standard relaxed cuts with structural durability.",
    features: ["100% organically sourced combed cotton", "Non-fade high fidelity visual elements", "Standard gender-neutral relaxed silhouette fit"],
    deliveryTime: "2-3 business days"
  },

  // CATEGORY: Home Decor
  {
    id: 11, name: "Ceramic Minimalist Vase", category: "Home-Decor", price: 35.00,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500",
    description: "Elegant shapes designed to complement minimal internal designs.",
    features: ["Locally sourced hand-thrown raw ceramics", "Matte stone powder coating", "Dimensions: height 10 inches, width 4 inches"],
    deliveryTime: "3-5 business days"
  },
  {
    id: 12, name: "Handwoven Area Rug", category: "Home-Decor", price: 120.00,
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500",
    description: "Woven materials crafted to insulate and visually elevate home spaces.",
    features: ["Sourced natural jute and plant fibers", "Heavyweight design avoids slipping", "Optimal standard size dimensions: 5' x 7'"],
    deliveryTime: "4-7 business days"
  },
  {
    id: 13, name: "Modern Table Lamp", category: "Home-Decor", price: 45.00,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    description: "Adjustable ambient diffusion light sources for working or lounging.",
    features: ["Energy-efficient warm spectrum LED inclusion", "Eco-friendly wooden base structure", "Responsive 3-way dimming capacitive sensor touch"],
    deliveryTime: "2-4 business days"
  },
  {
    id: 14, name: "Abstract Canvas Art", category: "Home-Decor", price: 65.00,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500",
    description: "Rich textures printed directly onto canvas backings for standard mounting.",
    features: ["High-grade non-fade dye sublimation canvas print", "Internally mounted solid pine frame structure", "Includes wall-mounting dynamic hardware templates"],
    deliveryTime: "3-5 business days"
  },
  {
    id: 15, name: "Velvet Throw Pillows (Set of 2)", category: "Home-Decor", price: 25.00,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500",
    description: "Soft velvet accents that bring luxury and comfort to living spaces.",
    features: ["Soft velvet upholstery blend", "Secure hidden-zipper enclosure designs", "Accommodates standard synthetic pillow cores"],
    deliveryTime: "2-3 business days"
  },

  // CATEGORY: Beauty
  {
    id: 16, name: "Hydrating Facial Moisturizer", category: "Beauty", price: 32.00,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500",
    description: "Lightweight dermal solutions designed for lasting skin hydration.",
    features: ["High concentration hyaluronic acid blend", "Fragrance-free sensitive skin safety", "All-day lightweight moisture barrier"],
    deliveryTime: "2-3 business days"
  },
  {
    id: 17, name: "Vitamin C Glow Serum", category: "Beauty", price: 40.00,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500",
    description: "Daily skin solutions formulated to target dark spots and discoloration.",
    features: ["Stable 15% active L-Ascorbic Acid blend", "Potent antioxidant environmental barrier shield", "Ethical cruelty-free laboratory sourcing"],
    deliveryTime: "2-3 business days"
  },
  {
    id: 18, name: "Matte Liquid Lipstick", category: "Beauty", price: 22.00,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500",
    description: "Richly saturated pigments with long-lasting matte performance.",
    features: ["Continuous smudge-free performance up to 12 hours", "Comfortable, non-drying structural hydration formula", "High-precision contoured tip applicator"],
    deliveryTime: "2-3 business days"
  },
  {
    id: 19, name: "Luxury Eau de Parfum", category: "Beauty", price: 85.00,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
    description: "Warm floral and wood notes mixed to offer layered ambient longevity.",
    features: ["Complex, balanced layered scent development profile", "High oil concentration for long projection wear", "Elegant presentation glass bottle structure"],
    deliveryTime: "3-5 business days"
  },
  {
    id: 20, name: "Gentle Foaming Cleanser", category: "Beauty", price: 18.00,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500",
    description: "Cleansing agents formulated to clarify skin without stripping natural oils.",
    features: ["Gentle amino-acid surfactant base", "Maintains optimal skin surface pH levels", "Dermatologically evaluated skin-friendly safety"],
    deliveryTime: "2-3 business days"
  },

  // CATEGORY: Sports
  {
    id: 21, name: "Match Training Soccer Ball", category: "Sports", price: 30.00,
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500",
    description: "Reinforced panels balanced to maintain flight consistency.",
    features: ["Textured surface panels enhance direct ball touch", "Premium interior butyl bladder keeps internal pressure shape", "Standard FIFA-grade weight regulations"],
    deliveryTime: "2-3 business days"
  },
  {
    id: 22, name: "Premium Eco Yoga Mat", category: "Sports", price: 45.00,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
    description: "High-density cushioned platforms designed to prevent slipping.",
    features: ["Sourced eco-friendly TPE materials", "Comfortable 6mm joint cushion support thickness", "Double-sided non-slip grip texture profiles"],
    deliveryTime: "2-4 business days"
  },
  {
    id: 23, name: "Adjustable Dumbbell Set", category: "Sports", price: 110.00,
    image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=500",
    description: "Save space with multiple customizable weights on a single bar.",
    features: ["Modular design ranges between 5 to 25 lbs", "Comfortable knurled slip-resistant handles", "Includes storage containment tray structures"],
    deliveryTime: "4-6 business days"
  },
  {
    id: 24, name: "Insulated Water Bottle", category: "Sports", price: 28.00,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    description: "Stainless steel walls designed to maintain temperature for hours.",
    features: ["Dual-wall vacuum seal thermal technology", "Durable food-grade 18/8 stainless steel", "BPA-free leakproof lid styles"],
    deliveryTime: "2-3 business days"
  },
  {
    id: 25, name: "Lightweight Running Shoes", category: "Sports", price: 95.00,
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500",
    description: "Responsive midsole cushioning tailored for daily road runs.",
    features: ["Engineered breathable knit upper chassis", "Shock-absorbing responsive midsole foam profiles", "Durable rubber wear panels on outsole"],
    deliveryTime: "2-4 business days"
  }
];

const CATEGORIES = ["Electronics", "Fashion", "Home-Decor", "Beauty", "Sports"];

// --- 2. LOCAL STORAGE / STATE ENGINE ---
let state = {
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  orders: JSON.parse(localStorage.getItem('orders')) || []
};

function saveState() {
  localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
  localStorage.setItem('cart', JSON.stringify(state.cart));
  localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
  localStorage.setItem('orders', JSON.stringify(state.orders));
  updateNav();
}

// --- 3. THE ROUTER ---
function router() {
  const hash = window.location.hash || '#/';
  const appContainer = document.getElementById('app');
  appContainer.innerHTML = ''; // Clear prior screen view

  if (hash === '#/' || hash === '#/home') {
    renderHomeView(appContainer);
  } else if (hash.startsWith('#/category/')) {
    const categoryName = decodeURIComponent(hash.replace('#/category/', ''));
    renderCategoryPage(categoryName, appContainer);
  } else if (hash.startsWith('#/product/')) {
    const productId = parseInt(hash.replace('#/product/', ''));
    renderProductPage(productId, appContainer);
  } else if (hash === '#/cart') {
    renderCartPage(appContainer);
  } else if (hash === '#/wishlist') {
    renderWishlistPage(appContainer);
  } else if (hash === '#/checkout') {
    renderCheckoutPage(appContainer);
  } else if (hash === '#/orders') {
    renderOrdersPage(appContainer);
  } else if (hash.startsWith('#/tracker/')) {
    const orderId = hash.replace('#/tracker/', '');
    renderTrackerPage(orderId, appContainer);
  } else if (hash === '#/login') {
    renderLoginPage(appContainer);
  } else if (hash === '#/signup') {
    renderSignupPage(appContainer);
  } else {
    appContainer.innerHTML = `<div style="text-align:center; padding: 3rem;"><h2>404 Page Not Found</h2><a href="#/" class="btn btn-primary" style="margin-top:1rem;">Return Home</a></div>`;
  }
  updateNav();
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

// --- 4. NAVIGATION HANDLERS ---
function updateNav() {
  const wishlistCount = document.getElementById('wishlist-count');
  const cartCount = document.getElementById('cart-count');
  const userDisplay = document.getElementById('user-display');
  const authBtn = document.getElementById('auth-btn');
  const navOrders = document.getElementById('nav-orders');

  wishlistCount.textContent = state.wishlist.length;
  cartCount.textContent = state.cart.reduce((total, item) => total + item.quantity, 0);

  if (state.currentUser) {
    userDisplay.textContent = `Hi, ${state.currentUser.name}`;
    authBtn.textContent = 'Logout';
    authBtn.href = '#/';
    authBtn.onclick = logoutUser;
    navOrders.classList.remove('hidden');
  } else {
    userDisplay.textContent = '';
    authBtn.textContent = 'Login';
    authBtn.href = '#/login';
    authBtn.onclick = null;
    navOrders.classList.add('hidden');
  }
}

function logoutUser(e) {
  state.currentUser = null;
  state.cart = [];
  state.wishlist = [];
  saveState();
  router();
}

// --- 5. PAGE RENDERERS ---

// A. HOME VIEW
function renderHomeView(container) {
  let catCards = CATEGORIES.map(cat => {
    let iconClass = "fa-laptop"; // Default fallback icon
    if (cat === "Fashion") iconClass = "fa-shirt";
    if (cat === "Home-Decor") iconClass = "fa-couch";
    if (cat === "Beauty") iconClass = "fa-sparkles";
    if (cat === "Sports") iconClass = "fa-dumbbell";

    return `
      <a href="#/category/${cat}" class="category-card">
        <i class="fa-solid ${iconClass}"></i>
        <h3>${cat.replace('-', ' ')}</h3>
      </a>
    `;
  }).join('');

  let featuredProducts = PRODUCTS.slice(0, 4).map(p => renderProductCard(p)).join('');

  container.innerHTML = `
    <section style="text-align: center; padding: 3rem 1rem; background: linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%); border-radius: var(--radius); margin-bottom: 2.5rem;">
      <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Experience Modern Shopping</h1>
      <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 1.5rem;">Explore curated items built with high performance and quality standards.</p>
      <a href="#/category/Electronics" class="btn btn-primary">Start Shopping <i class="fa-solid fa-arrow-right"></i></a>
    </section>

    <h2 style="margin-bottom: 1.5rem;">Product Categories</h2>
    <div class="category-list">${catCards}</div>

    <h2 style="margin-bottom: 1.5rem;">Trending Products</h2>
    <div class="product-grid">${featuredProducts}</div>
  `;
}

// B. CATEGORY VIEW (PLP)
function renderCategoryPage(categoryName, container) {
  const filtered = PRODUCTS.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
  
  if (filtered.length === 0) {
    container.innerHTML = `<h2>Category Not Found</h2>`;
    return;
  }

  let productsHTML = filtered.map(p => renderProductCard(p)).join('');

  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem;">
      <h2 style="text-transform: capitalize;">Category: ${categoryName.replace('-', ' ')}</h2>
      <a href="#/" class="btn btn-outline btn-sm"><i class="fa-solid fa-chevron-left"></i> All Categories</a>
    </div>
    <div class="product-grid">
      ${productsHTML}
    </div>
  `;
}

function renderProductCard(product) {
  const inWishlist = state.wishlist.some(id => id === product.id);
  const heartIcon = inWishlist ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  const heartColor = inWishlist ? 'color: var(--danger);' : '';

  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-img" onclick="window.location.hash='#/product/${product.id}'" style="cursor:pointer;">
      <div class="product-info">
        <h3 class="product-title" onclick="window.location.hash='#/product/${product.id}'" style="cursor:pointer; color: var(--text-main);">${product.name}</h3>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <div class="product-actions">
          <button class="btn btn-primary btn-sm btn-cart" onclick="addToCart(${product.id})" style="flex-grow:1;">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <button class="btn btn-outline btn-sm" onclick="toggleWishlist(${product.id})" style="width:40px; padding:0; display:flex; justify-content:center; align-items:center;">
            <i class="${heartIcon}" style="${heartColor}"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// C. PRODUCT DESCRIPTION VIEW (PDP)
function renderProductPage(productId, container) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) {
    container.innerHTML = `<h2>Product not found.</h2>`;
    return;
  }

  const inWishlist = state.wishlist.some(id => id === product.id);
  const heartIcon = inWishlist ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  const heartColor = inWishlist ? 'color: var(--danger);' : '';

  let featuresListHTML = product.features.map(f => `<li>${f}</li>`).join('');

  container.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <a href="#/category/${product.category}" class="btn btn-outline btn-sm"><i class="fa-solid fa-chevron-left"></i> Back to ${product.category}</a>
    </div>
    <div class="pdp-container">
      <div>
        <img src="${product.image}" alt="${product.name}" class="pdp-img">
      </div>
      <div class="pdp-details">
        <span style="text-transform: uppercase; font-size: 0.8rem; font-weight:700; color: var(--primary); letter-spacing: 1px;">${product.category}</span>
        <h2>${product.name}</h2>
        <div class="pdp-price">$${product.price.toFixed(2)}</div>
        <p style="line-height: 1.6; color: var(--text-muted);">${product.description}</p>
        
        <div class="pdp-meta">
          <p><i class="fa-solid fa-truck" style="color:var(--primary); margin-right:5px;"></i> Est. Delivery: <strong>${product.deliveryTime}</strong></p>
          <p><i class="fa-solid fa-circle-check" style="color:var(--success); margin-right:5px;"></i> Status: <strong>In Stock</strong></p>
        </div>

        <div style="margin-bottom: 2rem;">
          <h4 style="margin-bottom: 0.5rem;">Product Highlights:</h4>
          <ul class="features-list" style="padding-left:1.2rem; color: var(--text-muted); font-size:0.95rem;">
            ${featuresListHTML}
          </ul>
        </div>

        <div style="display:flex; gap: 1rem;">
          <button class="btn btn-primary" onclick="addToCart(${product.id})" style="flex-grow:1; justify-content:center;">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <button class="btn btn-outline" onclick="toggleWishlist(${product.id})" style="width: 50px; justify-content:center;">
            <i class="${heartIcon}" style="${heartColor} font-size:1.2rem;"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// D. CART VIEW
function renderCartPage(container) {
  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 4rem 1rem;">
        <i class="fa-solid fa-cart-flatbed" style="font-size: 4rem; color: var(--text-muted); margin-bottom:1.5rem;"></i>
        <h2>Your Cart is empty.</h2>
        <a href="#/" class="btn btn-primary" style="margin-top:1.5rem;">Continue Shopping</a>
      </div>
    `;
    return;
  }

  let cartItemsHTML = state.cart.map(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    const subtotal = prod.price * item.quantity;
    return `
      <div class="cart-item">
        <img src="${prod.image}" alt="${prod.name}" class="cart-item-img">
        <div style="flex-grow:1;">
          <h4 style="margin-bottom:0.25rem;">${prod.name}</h4>
          <p style="color: var(--text-muted); font-size:0.9rem; margin-bottom:0.5rem;">Unit Price: $${prod.price.toFixed(2)}</p>
          <div class="qty-control">
            <button class="btn btn-outline btn-sm" style="padding: 2px 8px;" onclick="updateCartQty(${prod.id}, ${item.quantity - 1})">-</button>
            <span style="font-weight:600; min-width:20px; text-align:center;">${item.quantity}</span>
            <button class="btn btn-outline btn-sm" style="padding: 2px 8px;" onclick="updateCartQty(${prod.id}, ${item.quantity + 1})">+</button>
          </div>
        </div>
        <div style="text-align:right;">
          <p style="font-weight:700; margin-bottom:0.5rem;">$${subtotal.toFixed(2)}</p>
          <button class="btn btn-sm btn-outline" style="color:var(--danger); border-color: rgba(239, 68, 68, 0.2);" onclick="removeFromCart(${prod.id})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
    `;
  }).join('');

  const cartSubtotal = state.cart.reduce((total, item) => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    return total + (prod.price * item.quantity);
  }, 0);

  const estimatedTax = cartSubtotal * 0.08;
  const grandTotal = cartSubtotal + estimatedTax;

  container.innerHTML = `
    <h2 style="margin-bottom: 2rem;">Your Shopping Cart</h2>
    <div class="cart-layout">
      <div>
        ${cartItemsHTML}
      </div>
      <div>
        <div style="background-color: var(--card-bg); border: 1px solid var(--border-color); padding:1.5rem; border-radius: var(--radius); box-shadow: var(--shadow);">
          <h3 style="margin-bottom:1.5rem; border-bottom:1px solid var(--border-color); padding-bottom:0.5rem;">Summary</h3>
          <div style="display:flex; justify-content:space-between; margin-bottom:0.75rem; font-size:0.95rem;">
            <span>Subtotal</span>
            <span>$${cartSubtotal.toFixed(2)}</span>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:0.75rem; font-size:0.95rem;">
            <span>Est. Tax (8%)</span>
            <span>$${estimatedTax.toFixed(2)}</span>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:1.5rem; font-size:1.1rem; font-weight:700; border-top:1px solid var(--border-color); padding-top:1rem;">
            <span>Total</span>
            <span>$${grandTotal.toFixed(2)}</span>
          </div>
          <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="proceedToCheckout()">Proceed to Checkout <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  `;
}

// E. WISHLIST VIEW
function renderWishlistPage(container) {
  if (state.wishlist.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 4rem 1rem;">
        <i class="fa-solid fa-heart" style="font-size: 4rem; color: var(--text-muted); margin-bottom:1.5rem;"></i>
        <h2>Your Wishlist is empty.</h2>
        <a href="#/" class="btn btn-primary" style="margin-top:1.5rem;">Browse Products</a>
      </div>
    `;
    return;
  }

  let wishlistHTML = state.wishlist.map(id => {
    const prod = PRODUCTS.find(p => p.id === id);
    return `
      <div class="wishlist-item">
        <img src="${prod.image}" alt="${prod.name}" class="cart-item-img">
        <div style="flex-grow:1;">
          <h4 style="margin-bottom:0.25rem;">${prod.name}</h4>
          <p style="color: var(--text-muted); font-size:0.9rem; margin-bottom:0.5rem;">Price: $${prod.price.toFixed(2)}</p>
          <p style="font-size:0.85rem; color: var(--text-muted);"><i class="fa-solid fa-truck"></i> ${prod.deliveryTime}</p>
        </div>
        <div style="display:flex; gap:0.5rem; flex-direction:column; align-items:flex-end;">
          <button class="btn btn-primary btn-sm" onclick="addToCart(${prod.id}); toggleWishlist(${prod.id});">Add to Cart</button>
          <button class="btn btn-sm btn-outline" style="color:var(--danger); border:none;" onclick="toggleWishlist(${prod.id})"><i class="fa-solid fa-trash-can"></i> Remove</button>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <h2 style="margin-bottom: 2rem;">Your Saved Items</h2>
    <div style="max-width: 800px;">
      ${wishlistHTML}
    </div>
  `;
}

// F. CHECKOUT VIEW
function renderCheckoutPage(container) {
  if (!state.currentUser) {
    // Redirect to login page and note they should log in
    alert("Please log in or sign up to complete your checkout.");
    window.location.hash = '#/login';
    return;
  }
  if (state.cart.length === 0) {
    window.location.hash = '#/';
    return;
  }

  const subtotal = state.cart.reduce((total, item) => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    return total + (p.price * item.quantity);
  }, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  container.innerHTML = `
    <h2 style="margin-bottom: 2rem;">Checkout Process</h2>
    <div class="checkout-container">
      <form id="checkout-form" onsubmit="handlePlaceOrder(event)">
        <h3 style="margin-bottom:1rem; font-size:1.15rem; border-bottom:1px solid var(--border-color); padding-bottom:0.5rem;">Shipping Information</h3>
        <div class="form-group">
          <label for="ship-name">Recipient Name</label>
          <input type="text" id="ship-name" class="form-control" required value="${state.currentUser.name}">
        </div>
        <div class="form-group">
          <label for="ship-address">Shipping Address</label>
          <input type="text" id="ship-address" class="form-control" placeholder="123 Main St, Apt 4" required>
        </div>
        <div class="form-group" style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
          <div>
            <label for="ship-city">City</label>
            <input type="text" id="ship-city" class="form-control" required>
          </div>
          <div>
            <label for="ship-zip">ZIP / Postal Code</label>
            <input type="text" id="ship-zip" class="form-control" required>
          </div>
        </div>

        <h3 style="margin-top:2rem; margin-bottom:1rem; font-size:1.15rem; border-bottom:1px solid var(--border-color); padding-bottom:0.5rem;">Payment Method</h3>
        <div class="form-group">
          <label style="display:flex; align-items:center; gap: 0.5rem; margin-bottom: 0.5rem; cursor:pointer;">
            <input type="radio" name="payment-method" value="Card" checked> <span>Credit / Debit Card</span>
          </label>
          <label style="display:flex; align-items:center; gap: 0.5rem; margin-bottom: 0.5rem; cursor:pointer;">
            <input type="radio" name="payment-method" value="PayPal"> <span>PayPal Account</span>
          </label>
          <label style="display:flex; align-items:center; gap: 0.5rem; margin-bottom: 0.5rem; cursor:pointer;">
            <input type="radio" name="payment-method" value="COD"> <span>Cash on Delivery (COD)</span>
          </label>
        </div>

        <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; margin-top:1.5rem;">Confirm & Pay $${total.toFixed(2)}</button>
      </form>

      <div>
        <div style="background-color: var(--bg-color); border: 1px solid var(--border-color); padding:1.5rem; border-radius: var(--radius);">
          <h3 style="margin-bottom: 1rem;">Order Review</h3>
          ${state.cart.map(item => {
            const p = PRODUCTS.find(prod => prod.id === item.id);
            return `
              <div style="display:flex; justify-content:space-between; margin-bottom:0.75rem; font-size:0.9rem;">
                <span style="max-width: 150px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${item.quantity}x ${p.name}</span>
                <span>$${(p.price * item.quantity).toFixed(2)}</span>
              </div>
            `;
          }).join('')}
          <div style="border-top:1px solid var(--border-color); padding-top:1rem; margin-top:1rem; font-size:0.95rem;">
            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
              <span>Subtotal</span>
              <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
              <span>Tax (8%)</span>
              <span>$${tax.toFixed(2)}</span>
            </div>
            <div style="display:flex; justify-content:space-between; font-weight:700; font-size:1.05rem; border-top: 1px dashed var(--border-color); padding-top:0.5rem; margin-top:0.5rem;">
              <span>Grand Total</span>
              <span>$${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// G. ORDER HISTORY VIEW
function renderOrdersPage(container) {
  if (!state.currentUser) {
    container.innerHTML = `<h2>Please login to view order history.</h2>`;
    return;
  }

  const userOrders = state.orders.filter(o => o.userEmail === state.currentUser.email);

  if (userOrders.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 4rem 1rem;">
        <i class="fa-solid fa-receipt" style="font-size: 4rem; color: var(--text-muted); margin-bottom:1.5rem;"></i>
        <h2>No orders found.</h2>
        <a href="#/" class="btn btn-primary" style="margin-top:1.5rem;">Browse Products</a>
      </div>
    `;
    return;
  }

  let ordersHTML = userOrders.map(order => {
    return `
      <div class="order-card">
        <div class="order-header">
          <div>
            <p style="font-size:0.85rem; color:var(--text-muted);">ORDER PLACED</p>
            <p style="font-weight:600;">${new Date(order.date).toLocaleDateString()}</p>
          </div>
          <div>
            <p style="font-size:0.85rem; color:var(--text-muted);">ORDER VALUE</p>
            <p style="font-weight:600;">$${order.total.toFixed(2)}</p>
          </div>
          <div>
            <p style="font-size:0.85rem; color:var(--text-muted);">ORDER NO.</p>
            <p style="font-weight:600;">#${order.id}</p>
          </div>
          <div style="text-align:right;">
            <a href="#/tracker/${order.id}" class="btn btn-outline btn-sm"><i class="fa-solid fa-map-location-dot"></i> Track Order</a>
          </div>
        </div>
        <div>
          ${order.items.map(item => {
            const p = PRODUCTS.find(prod => prod.id === item.id);
            return `
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; font-size:0.95rem;">
                <span style="font-weight:500;">${p.name} <span style="color:var(--text-muted);">x${item.quantity}</span></span>
                <span style="color:var(--text-muted);">$${(p.price * item.quantity).toFixed(2)}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).reverse().join(''); // Reverse to show latest first

  container.innerHTML = `
    <h2 style="margin-bottom: 2rem;">Your Order History</h2>
    <div style="max-width: 800px;">
      ${ordersHTML}
    </div>
  `;
}

// H. DELIVERY TRACKER VIEW
function renderTrackerPage(orderId, container) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) {
    container.innerHTML = `<h2>Order tracker file not found.</h2>`;
    return;
  }

  // Calculate dynamic delivery status step depending on minutes passed since order creation (for demo purposes)
  const minutesPassed = Math.floor((Date.now() - order.timestamp) / 60000);
  let activeStepIndex = 0; // 0: Ordered, 1: Processing, 2: Shipped, 3: Out for Delivery, 4: Delivered

  if (minutesPassed >= 10) {
    activeStepIndex = 4;
  } else if (minutesPassed >= 6) {
    activeStepIndex = 3;
  } else if (minutesPassed >= 3) {
    activeStepIndex = 2;
  } else if (minutesPassed >= 1) {
    activeStepIndex = 1;
  }

  const steps = ["Ordered", "Processing", "Shipped", "Out for Delivery", "Delivered"];

  let stepsHTML = steps.map((step, idx) => {
    let statusClass = "";
    if (idx < activeStepIndex) statusClass = "completed";
    else if (idx === activeStepIndex) statusClass = "active";

    return `
      <div class="tracker-step ${statusClass}">
        <div class="step-bullet">${idx < activeStepIndex ? '✓' : idx + 1}</div>
        <div class="step-text">${step}</div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <a href="#/orders" class="btn btn-outline btn-sm"><i class="fa-solid fa-chevron-left"></i> Back to Orders</a>
    </div>
    <div class="auth-box" style="max-width:700px; padding:2rem;">
      <h2 style="margin-bottom:0.5rem; text-align:center;">Shipment Tracker</h2>
      <p style="text-align:center; color:var(--text-muted); font-size:0.9rem;">Tracking Order: <strong>#${order.id}</strong></p>
      
      <div class="tracker-steps">
        ${stepsHTML}
      </div>

      <div style="background-color:var(--bg-color); border:1px solid var(--border-color); border-radius:var(--radius); padding:1rem; margin-top:2rem;">
        <h4 style="margin-bottom:0.5rem;">Shipment Details</h4>
        <p style="font-size:0.9rem; margin-bottom:0.25rem;"><strong>Carrier Service:</strong> SwiftCart Logistics Standard</p>
        <p style="font-size:0.9rem; margin-bottom:0.25rem;"><strong>Shipping Destination:</strong> ${order.address}</p>
        <p style="font-size:0.9rem; margin-bottom:0.25rem;"><strong>Payment Mode:</strong> ${order.paymentMethod}</p>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-top:0.75rem;"><em>Note: For demo calculations, status advances automatically as minutes pass on your browser clock.</em></p>
      </div>
    </div>
  `;
}

// I. LOGIN VIEW
function renderLoginPage(container) {
  container.innerHTML = `
    <div class="auth-box">
      <h2 style="margin-bottom: 1.5rem; text-align:center;">Login</h2>
      <form id="login-form" onsubmit="handleLogin(event)">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" class="form-control" required placeholder="name@email.com">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" class="form-control" required placeholder="••••••••">
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; margin-top:1rem;">Log In</button>
      </form>
      <p style="margin-top:1.5rem; text-align:center; font-size:0.9rem; color:var(--text-muted);">
        Don't have an account? <a href="#/signup" style="color:var(--primary); font-weight:600; text-decoration:none;">Sign Up</a>
      </p>
    </div>
  `;
}

// J. SIGNUP VIEW
function renderSignupPage(container) {
  container.innerHTML = `
    <div class="auth-box">
      <h2 style="margin-bottom: 1.5rem; text-align:center;">Create Account</h2>
      <form id="signup-form" onsubmit="handleSignup(event)">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" class="form-control" required placeholder="John Doe">
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" class="form-control" required placeholder="name@email.com">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" class="form-control" required placeholder="Min 6 characters">
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; margin-top:1rem;">Sign Up</button>
      </form>
      <p style="margin-top:1.5rem; text-align:center; font-size:0.9rem; color:var(--text-muted);">
        Already have an account? <a href="#/login" style="color:var(--primary); font-weight:600; text-decoration:none;">Log In</a>
      </p>
    </div>
  `;
}


// --- 6. USER ACTION HANDLERS ---

// CART OPERATIONS
window.addToCart = function(productId) {
  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ id: productId, quantity: 1 });
  }
  saveState();
  alert("Item added to cart.");
};

window.updateCartQty = function(productId, quantity) {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  const item = state.cart.find(item => item.id === productId);
  if (item) {
    item.quantity = quantity;
    saveState();
    router();
  }
};

window.removeFromCart = function(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveState();
  router();
};

window.proceedToCheckout = function() {
  if (!state.currentUser) {
    alert("Authentication required. Please sign in to proceed with payment.");
    window.location.hash = '#/login';
  } else {
    window.location.hash = '#/checkout';
  }
};

// WISHLIST OPERATIONS
window.toggleWishlist = function(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx !== -1) {
    state.wishlist.splice(idx, 1);
  } else {
    state.wishlist.push(productId);
  }
  saveState();
  router();
};

// AUTHENTICATION LOGIC
window.handleLogin = function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    state.currentUser = { name: user.name, email: user.email };
    saveState();
    window.location.hash = '#/';
  } else {
    alert("Incorrect email credentials or password entry.");
  }
};

window.handleSignup = function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (password.length < 6) {
    alert("Password length should be a minimum of 6 characters.");
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existing = users.find(u => u.email === email);

  if (existing) {
    alert("An account with this email already exists.");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));

  // Log in user immediately
  state.currentUser = { name, email };
  saveState();
  window.location.hash = '#/';
};

// CHECKOUT & ORDERS PLACEMENT
window.handlePlaceOrder = function(e) {
  e.preventDefault();
  const address = document.getElementById('ship-address').value.trim();
  const city = document.getElementById('ship-city').value.trim();
  const zip = document.getElementById('ship-zip').value.trim();
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

  const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();
  const subtotal = state.cart.reduce((total, item) => {
    const p = PRODUCTS.find(prod => prod.id === item.id);
    return total + (p.price * item.quantity);
  }, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const newOrder = {
    id: orderId,
    timestamp: Date.now(),
    date: new Date().toISOString(),
    items: [...state.cart],
    total: total,
    address: `${address}, ${city}, ZIP ${zip}`,
    paymentMethod: paymentMethod,
    userEmail: state.currentUser.email
  };

  state.orders.push(newOrder);
  state.cart = []; // Clear Cart
  saveState();

  alert(`Payment processed. Order #${orderId} was successfully initialized.`);
  window.location.hash = `#/tracker/${orderId}`;
};
