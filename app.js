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
    // FIXED: Switched to a reliable Unsplash laptop image to resolve load/display errors
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500",
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
    image: "https://images.unspla
