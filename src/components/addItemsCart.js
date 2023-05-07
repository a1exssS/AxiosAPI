export default function addItemCart(data) {
	let clicker = 1
	document.querySelector('.the-product__counter').textContent = `${clicker}x`
	document.querySelector('#addProduct').addEventListener('click', () => {
		clicker++
		document.querySelector('.the-product__counter').textContent = `${clicker}x`
		document.querySelector('.the-product__price').textContent = `$${data * clicker}`
	})
}