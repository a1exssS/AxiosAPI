import Lenis from '@studio-freight/lenis'
import {gsap} from 'gsap'
import {Flip} from 'gsap/Flip'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Observer} from 'gsap/Observer'
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
import {Draggable} from 'gsap/Draggable'
import {EaselPlugin} from 'gsap/EaselPlugin'
import {MotionPathPlugin} from 'gsap/MotionPathPlugin'
import {PixiPlugin} from 'gsap/PixiPlugin'
import {TextPlugin} from 'gsap/TextPlugin'

const lenis = new Lenis({
	duration: 1.2,
	easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	direction: 'vertical',
	gestureDirection: 'vertical',
	smooth: true,
	mouseMultiplier: 1,
	smoothTouch: false,
	touchMultiplier: 2,
	infinite: false,
})

function raf(time) {
	lenis.raf(time)
	requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const tl = gsap.timeline()
const tlStep = gsap.timeline({
	defaults: {
		durations: 0.5,
	},
	repeat: -1,
	repeatDelay: 1,
})
const tlStep2 = gsap.timeline({
	defaults: {
		durations: 0.5,
	},
	repeat: -1,
	repeatDelay: 1,
})
const tlStep3 = gsap.timeline({
	defaults: {
		durations: 0.5,
	},
	repeat: -1,
	repeatDelay: 1,
})

tl.fromTo(
	'.greeting__title',
	{
		opacity: 0,
		x: 30,
	},
	{
		opacity: 1,
		duration: 1,
		x: 0,
	},
	0.5
)
	.fromTo(
		'.greeting__subtitle',
		{
			opacity: 0,
			x: -30,
		},
		{
			opacity: 1,
			duration: 1,
			x: 0,
		},
		1
	)
	.fromTo(
		'.greeting__link-down',
		{
			opacity: 0,
			y: 30,
		},
		{
			opacity: 1,
			duration: 1,
			y: 0,
		},
		1.5
	)
	.fromTo(
		'.header__logo',
		{
			y: -20,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 1,
		},
		0.5
	)
	.fromTo(
		'.header__navigation a',
		{
			y: -20,
			opacity: 0,
		},
		{
			y: 0,
			duration: 0.2,
			stagger: 0.15,
			opacity: 1,
		},
		0.5
	)
	.fromTo(
		'.greeting__background-video',
		{
			opacity: 0,
		},
		{
			opacity: 1,
			duration: 1,
		},
		0.5
	)
if (document.querySelector('.employes')) {
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop

	const aboutSectionLocation = document.querySelector('.about')

	function aboutSection() {
		const rect = aboutSectionLocation.getBoundingClientRect()
		const top = rect.top + scrollTop

		const btn = document.querySelector('.greeting__img-down')
		btn.addEventListener('click', function (e) {
			e.preventDefault()
			gsap.to(window, {
				duration: 1.2,
				scrollTo: top,
				ease: 'expo.out',
			})
		})
	}

	aboutSection()
}

let aboutBox = gsap.utils.toArray('.about__box')
let aboutUsBox = gsap.utils.toArray('.about-us__box')
let locationBox = gsap.utils.toArray('.location__box')
let card = gsap.utils.toArray('.achivements__box')
let cardMobile = gsap.utils.toArray('.achivements__item')
let card2 = gsap.utils.toArray('.employes__item')
let card2Mobile = gsap.utils.toArray('.employes__item')
let contacts = gsap.utils.toArray('.contacts__item')

tlStep3
	.to('.about__skill-box svg', {
		stagger: {
			each: 0.1,
			from: 'edges',
		},
		scale: 1,
	})
	.to('.about__skill-box svg', {
		stagger: {
			each: 0.1,
			from: 'edges',
		},
		scale: 1.1,
	})
	.to('.about__skill-box svg', {
		stagger: {
			each: 0.1,
			from: 'edges',
		},
		scale: 1,
		ease: 'power1.out',
	})

let contactsImg = gsap.utils.toArray('.contacts__img')
contactsImg.forEach(item => {
	tlStep
		.to(item, {
			scale: 1.2,
		})
		.to(item, {
			rotation: -20,
		})
		.to(item, {
			rotation: 20,
		})
		.to(item, {
			scale: 1,
			rotation: 0,

			ease: 'power1.out',
		})
})

if (ScrollTrigger.isTouch !== 1) {
	gsap.fromTo(
		'.footer__logo',
		{
			opacity: 0,
			x: -100,
		},
		{
			x: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: '.footer',
				start: '-20% 100%',
				end: '-5% 96%',
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.footer__copyright',
		{
			opacity: 0,
			x: 100,
		},
		{
			x: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: '.footer',
				start: '-20% 100%',
				end: '-5% 96%',
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.footer__navigation',
		{
			opacity: 0,
			x: 100,
		},
		{
			x: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: '.footer',
				start: '-20% 100%',
				end: '-5% 96%',
				scrub: true,
			},
		}
	)
	contacts.forEach(item => {
		gsap.fromTo(
			item,
			{
				opacity: 0,
				scale: 0,
			},
			{
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: '.portfolio',
					start: 'bottom 94%',
					end: 'bottom 38%',

					scrub: true,
				},
			}
		)
	})
	card.forEach(item => {
		gsap.fromTo(
			item,
			{
				opacity: 0,
				scale: 0,
			},
			{
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: '.about',
					start: 'bottom 90%',
					end: 'bottom 40%',

					scrub: true,
				},
			}
		)
	})
	card2.forEach(item => {
		gsap.fromTo(
			item,
			{
				opacity: 0,
				scale: 0,
			},
			{
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: '.about-us',
					start: 'bottom 86%',
					end: 'bottom 36%',

					scrub: true,
				},
			}
		)
	})
	gsap.fromTo(
		'.portfolio__box',
		{
			opacity: 0,
			y: 100,
		},
		{
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: '.portfolio',
				start: 'top 88%',
				end: 'top 40%',
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.contacts__subtitle',
		{
			opacity: 0,
			y: 100,
		},
		{
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: '.portfolio',
				start: 'bottom 90%',
				end: 'bottom 42%',

				scrub: true,
			},
		}
	)

	gsap.fromTo(
		'.contacts__title',
		{
			opacity: 0,
			y: 100,
		},
		{
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: '.portfolio',
				start: 'bottom 92%',
				end: 'bottom 40%',

				scrub: true,
			},
		}
	)

	gsap.fromTo(
		locationBox[1],
		{
			opacity: 0,
			x: 100,
		},
		{
			opacity: 1,
			x: 0,
			scrollTrigger: {
				trigger: '.employes',
				start: '100% 90%',
				end: '120% 45%',
				scrub: true,
			},
		}
	)

	gsap.fromTo(
		locationBox[0],
		{
			opacity: 0,
			x: -100,
		},
		{
			opacity: 1,
			y: 0,
			scrollTrigger: {
				trigger: '.employes',
				start: '140% 90%',
				end: '160% 45%',
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		aboutUsBox[1],
		{
			opacity: 0,
			x: 100,
		},
		{
			opacity: 1,
			x: 0,
			scrollTrigger: {
				trigger: '.products',
				start: 'bottom 90%',
				end: 'bottom 45%',
				scrub: true,
			},
		}
	)

	gsap.fromTo(
		aboutUsBox[0],
		{
			opacity: 0,
			y: 100,
		},
		{
			opacity: 1,
			y: 0,
			scrollTrigger: {
				trigger: '.products',
				start: 'bottom 85%',
				end: 'bottom 65%',
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		aboutBox[1],
		{
			opacity: 0,
			x: 100,
		},
		{
			opacity: 1,
			x: 0,
			scrollTrigger: {
				trigger: '.about',
				start: 'top 90%',
				end: 'top 45%',

				scrub: true,
			},
		}
	)

	gsap.fromTo(
		aboutBox[0],
		{
			opacity: 0,
			y: 100,
		},
		{
			opacity: 1,
			y: 0,
			scrollTrigger: {
				trigger: '.about',
				start: 'top 90%',
				end: 'top 45%',

				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.about__title',
		{
			opacity: 0,
			y: 100,
		},
		{
			opacity: 1,
			y: 0,
			scrollTrigger: {
				trigger: '.header',
				start: '140% 10%',
				end: '150% 0%',

				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.achivements__title',
		{
			opacity: 0,
			y: 100,
		},
		{
			opacity: 1,
			y: 0,
			scrollTrigger: {
				trigger: '.about',
				start: '124% 94%',
				end: '130% 84%',
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.products__box',
		{
			opacity: 0,
			scale: 0,
		},
		{
			opacity: 1,
			scale: 1,
			scrollTrigger: {
				trigger: '.achivements',
				start: '154% 94%',
				end: '170% 84%',
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.employes__title',
		{
			opacity: 0,
			scale: 0,
		},
		{
			opacity: 1,
			scale: 1,
			scrollTrigger: {
				trigger: '.about-us',
				start: '100% 90%',
				end: '120% 84%',
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.products__title',
		{
			opacity: 0,
			y: 100,
		},
		{
			opacity: 1,
			y: 0,
			scrollTrigger: {
				trigger: '.achivements',
				start: '124% 94%',
				end: '130% 84%',
				scrub: true,
			},
		}
	)
}

if (ScrollTrigger.isTouch == 1) {
	contacts.forEach(item => {
		gsap.fromTo(
			item,
			{
				opacity: 0,
				scale: 0,
			},
			{
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: '.portfolio',
					start: 'bottom 94%',
					end: 'bottom 38%',

					scrub: true,
				},
			}
		)
	})
	cardMobile.forEach(item => {
		gsap.fromTo(
			item,
			{
				opacity: 0,
				scale: 0,
			},
			{
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: item,
					start: 'top 96%',
					end: 'top 80%',

					scrub: true,
				},
			}
		)
	})
	card2Mobile.forEach(item => {
		gsap.fromTo(
			item,
			{
				opacity: 0,
				scale: 0,
			},
			{
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: item,
					start: 'top 90%',
					end: 'top 66%',

					scrub: true,
				},
			}
		)
	})
	gsap.fromTo(
		'.portfolio__box',
		{
			opacity: 0,
			y: 100,
		},
		{
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: '.portfolio',
				start: 'top 88%',
				end: 'top 40%',
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.contacts__subtitle',
		{
			opacity: 0,
			y: 100,
		},
		{
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: '.portfolio',
				start: 'bottom 90%',
				end: 'bottom 42%',

				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.contacts__title',
		{
			opacity: 0,
			y: 100,
		},
		{
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: '.portfolio',
				start: 'bottom 92%',
				end: 'bottom 40%',

				scrub: true,
			},
		}
	)

	gsap.fromTo(
		locationBox[1],
		{
			opacity: 0,
			x: 100,
		},
		{
			opacity: 1,
			x: 0,
			scrollTrigger: {
				trigger: locationBox[0],
				start: 'bottom 90%',
				end: 'bottom 45%',
				scrub: true,
			},
		}
	)

	gsap.fromTo(
		locationBox[0],
		{
			opacity: 0,
			x: -100,
		},
		{
			opacity: 1,
			x: 0,
			scrollTrigger: {
				trigger: '.employes',
				start: 'bottom 90%',
				end: 'bottom 45%',
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		aboutUsBox[1],
		{
			opacity: 0,
			x: 100,
		},
		{
			opacity: 1,
			x: 0,
			scrollTrigger: {
				trigger: aboutUsBox[0],
				start: '60% 90%',
				end: '60% 45%',
				scrub: true,
			},
		}
	)

	gsap.fromTo(
		aboutUsBox[0],
		{
			opacity: 0,
			y: 100,
		},
		{
			opacity: 1,
			y: 0,
			scrollTrigger: {
				trigger: '.products',
				start: 'bottom 85%',
				end: 'bottom 65%',
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		aboutBox[1],
		{
			opacity: 0,
			x: 100,
		},
		{
			opacity: 1,
			x: 0,
			scrollTrigger: {
				trigger: '.about',
				start: 'top 90%',
				end: 'top 45%',

				scrub: true,
			},
		}
	)

	gsap.fromTo(
		aboutBox[0],
		{
			opacity: 0,
			y: 100,
		},
		{
			opacity: 1,
			y: 0,
			scrollTrigger: {
				trigger: aboutBox[1],
				start: '70% 90%',
				end: '70% 45%',

				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.about__title',
		{
			opacity: 0,
			y: 100,
		},
		{
			opacity: 1,
			y: 0,
			scrollTrigger: {
				trigger: '.header',
				start: '140% 10%',
				end: '150% 0%',

				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.achivements__title',
		{
			opacity: 0,
			y: 100,
		},
		{
			opacity: 1,
			y: 0,
			scrollTrigger: {
				trigger: '.about',
				start: '124% 94%',
				end: '130% 84%',
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.products__box',
		{
			opacity: 0,
			scale: 0,
		},
		{
			opacity: 1,
			scale: 1,
			scrollTrigger: {
				trigger: '.achivements',
				start: '124% 94%',
				end: '130% 84%',
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.employes__title',
		{
			opacity: 0,
			scale: 0,
		},
		{
			opacity: 1,
			scale: 1,
			scrollTrigger: {
				trigger: '.about-us',
				start: '100% 90%',
				end: '120% 84%',
				scrub: true,
			},
		}
	)
	gsap.fromTo(
		'.products__title',
		{
			opacity: 0,
			y: 100,
		},
		{
			opacity: 1,
			y: 0,
			scrollTrigger: {
				trigger: '.achivements',
				start: '124% 94%',
				end: '130% 84%',
				scrub: true,
			},
		}
	)
}
