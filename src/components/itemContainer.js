import data from './data'
import {btn} from './itemData'
if (document.querySelector('.greeting__link-down')) {
	Promise.resolve(data).then(res => {
		putItems(res)
	})

	function putItems(res) {
		let createElement = ''
		let btnCounter = 5

		for (let i = 0; i < 5; i++) {
			createElement = `

				<div class="products__item" data-number="${res[i].id}" id="products__item-id${res[i].id}">
					<span class="products__category">${res[i].category}</span>
					<a href="./product.html" class="products__link">
						<img src="${res[i].image}" class="products__img">
						<h2 class="products__item-title">${res[i].title}</h2>
					</a>
					<span class="products__item-description">${res[i].description}</span>
					<input class="products__expend-btn" type="checkbox" />
					<div class="products__retings">
						<span class="products__rate">
							<svg class="products__img-rate">
								<use xlink:href="./assets/sprite-6d01e230.svg#star" />
							</svg>
							${res[i].rating.rate}
						</span>
						<span class="products__price">$${res[i].price}</span>
						</div>
				</div>
			</div>
				`

			document.querySelector('.products__items').insertAdjacentHTML('beforeend', createElement)
		}

		btn()
		document.querySelector('.products__btn').addEventListener('click', () => {
			btnCounter += 5
			for (let i = btnCounter - 5; i < btnCounter; i++) {
				if (i >= res.length) {
					document.querySelector('.products__btn').textContent = `Sorry but you've reached the end of Our list of ${res.length} items`
					document.querySelector('.products__btn').style.pointerEvents = 'none'
					return
				}
				createElement = `

				<div class="products__item" data-number="${res[i].id}" id="products__item-id${res[i].id}">
						<span class="products__category">${res[i].category}</span>
						<a href="./product.html" class="products__link">
							<img src="${res[i].image}" class="products__img">
							<h2 class="products__item-title">${res[i].title}</h2>
						</a>
						<span class="products__item-description">${res[i].description}</span>
						<input class="products__expend-btn" type="checkbox" />
						<div class="products__retings">
							<span class="products__rate">
								<svg class="products__img-rate">
									<use xlink:href="./assets/sprite-6d01e230.svg#star" />
								</svg>
								${res[i].rating.rate}
							</span>
							<span class="products__price">$${res[i].price}</span>
						</div>
					</div>
				</div>
				`
				document.querySelector('.products__items').insertAdjacentHTML('beforeend', createElement)
			}
			btn()
		})
	}
}
