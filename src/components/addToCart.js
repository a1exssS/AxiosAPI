import axios from 'axios'
import sentData from './genId'

export default async function moveToCart() {
	document.querySelector('.the-product__buy').addEventListener('click', () => {
		const counter = document.querySelector('.the-product__counter').textContent
		const price = document.querySelector('.the-product__price').textContent
		const boughtProduct = JSON.parse(sessionStorage.getItem('pickedProduct'))
		sentData(counter, price, boughtProduct)
		document.querySelectorAll('.the-product__box').forEach(element => {
			element.remove()
		})
		const message = `
		<div class="the-product__message-box">
			<span class="the-product__message">Thank you for buying our product! </span>
			<span class="the-product__message">To see your product you need to visit your <a href="./profile.html">cart</a></span>
		</div>
		`
		document.querySelector('.the-product__container').insertAdjacentHTML('afterend', message)
	})
}
