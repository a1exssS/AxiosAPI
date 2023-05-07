import moveToCart from "./addToCart"
import sentData from "./genId"



export default async function unpackData(data) {
	if (document.querySelector('.container__cart')) {
		let cartData = JSON.parse(localStorage.getItem('boughtItem')).price


		let cartBox = ''
		cartBox += `
			<div class="cart__box">
				<div class="cart__info">
				<img src="${cartData.boughtProduct.image}" alt="" class="cart__img">
					<div>
						<h2 class="cart__title">${cartData.boughtProduct.title}</h2>
						<span class="cart__description">${cartData.boughtProduct.description}</span>
					</div>
				</div>
				<div class="cart__sum">
					<div>
						<span class="cart__count">
							${cartData.counter}
						</span>
						<span class="cart__money">
							${cartData.price}
						</span>
					</div>
					<button class="cart__remove">
						remove
					</button>
				</div>
			</div>
		`

		document.querySelector('.container__cart').insertAdjacentHTML('beforeend', cartBox)

		document.querySelector('.cart__remove').addEventListener('click', () => {
			document.querySelector('.cart__box').remove()
			localStorage.removeItem('boughtItem')
		})

	}
}



unpackData()