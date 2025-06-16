let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} added to cart!`);
  updateCart();
}

function updateCart() {
  const cartSidebar = document.getElementById("cart-sidebar");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} — ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Total: ₹${total}`;
}

document.getElementById("cart-icon").addEventListener("click", () => {
  document.getElementById("cart-sidebar").classList.add("open");
  updateCart();
});

function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("open");
}
