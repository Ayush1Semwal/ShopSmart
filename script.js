const products = [
  { id: 1, name: "Wireless Headphones", price: 1499, category: "electronics", image: "product1.jpg" },
  { id: 2, name: "Casual Shirt", price: 899, category: "fashion", image: "product2.jpg" },
  { id: 3, name: "Smart Watch", price: 1999, category: "electronics", image: "product3.jpg" },
  { id: 4, name: "Sofa Cushion", price: 499, category: "home", image: "product4.jpg" },
  { id: 5, name: "Designer Lamp", price: 1299, category: "home", image: "product5.jpg" },
  { id: 6, name: "Denim Jacket", price: 1499, category: "fashion", image: "product6.jpg" },
  { id: 7, name: "Bluetooth Speaker", price: 999, category: "electronics", image: "product7.jpg" },
  { id: 8, name: "Table Plant", price: 299, category: "home", image: "product8.jpg" }
];


const productList = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");
const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
const cartItemName = document.getElementById("cartItemName");

function displayProducts(items) {
  productList.innerHTML = items.map(product => `
    <div class="col-md-4 col-lg-3">
      <div class="card h-100 shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${product.name}</h5>
          <p class="text-muted">₹${product.price}</p>
          <button class="btn btn-outline-success add-cart-btn" data-name="${product.name}">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
  attachCartListeners();
}

// Filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.getAttribute('data-category');
    const filtered = category === "all" ? products : products.filter(p => p.category === category);
    displayProducts(filtered);
  });
});

// Search functionality
searchInput.addEventListener("keyup", e => {
  const query = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
});

// Cart Modal
function attachCartListeners() {
  document.querySelectorAll(".add-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-name");
      cartItemName.textContent = name;
      cartModal.show();
    });
  });
}

// Initial display
displayProducts(products);



