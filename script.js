let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  showToast(name + " added to cart!");
  updateCart();
}

function updateCart() {
  document.getElementById('cart-icon').onclick = () => {
    const items = encodeURIComponent(JSON.stringify(cart));
    window.location.href = 'checkout.html?items=' + items;
  };
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
