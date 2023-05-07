import {btn} from './itemData'
import Swiper, {Navigation, Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import addItemCart from './addItemsCart'
import moveToCart from './addToCart'

export default async function returnData(response) {
	const objData = JSON.stringify(response)
	sessionStorage.setItem('pickedProduct', objData)
	return objData
}
export function getPageName() {
	var path = window.location.pathname
	var page = path.split('/').pop()
	return page
}

if (getPageName() == 'product.html') {
	let sessionData = JSON.parse(sessionStorage.getItem('pickedProduct'))
	document.querySelector('.the-product__category').textContent = sessionData.category
	document.querySelector('.the-product__title').textContent = sessionData.title
	document.querySelector('.the-product__description').textContent = sessionData.description
	document.querySelector('.the-product__rate').innerHTML = `
	<svg class="the-product__img-rate">
		<use xlink:href="./assets/sprite-6d01e230.svg#star" />
	</svg>
	${sessionData.rating.rate}
	`
	document.querySelector('.the-product__count').innerHTML = `
	<svg class="the-product__img-count">
		<use xlink:href="./assets/sprite-6d01e230.svg#user-count">
	</svg>
	${sessionData.rating.count}
	`
	document.querySelector('.the-product__price').textContent = '$' + sessionData.price
	let swipreDefault = `
		<div class="the-product__swiper-slide swiper-slide">
			<img class="the-product__swiper-img the-product__swiper-img_cover" src="./assets/nomore-images.png" alt="" >
		</div>
		`
	addItemCart(sessionData.price)
	let swiperBox = ''
	for (let i = 0; i < [sessionData.image].length; i++) {
		swiperBox += `
		<div class="the-product__swiper-slide swiper-slide">
			<img class="the-product__swiper-img" src="${[sessionData.image][i]}" alt="">
		</div>`
		document.querySelector('.the-product__swiper-wrapper').insertAdjacentHTML('beforeend', swiperBox)
	}

	document.querySelector('.the-product__swiper-wrapper').insertAdjacentHTML('beforeend', swipreDefault)
	moveToCart()
}
const swiper = new Swiper('.swiper', {
	modules: [Navigation, Pagination],
	direction: 'horizontal',
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},
})
