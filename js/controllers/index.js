const btnCart = document.getElementById("cart-btn");
const logo = document.getElementById("logo");

btnCart?.addEventListener('click', () => {
	window.location.href = '/views/cart.html';
});

logo?.addEventListener('click', () => {
	window.location.href = '/index.html';
});