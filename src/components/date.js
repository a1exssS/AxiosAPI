document.querySelector('.footer__copyright').textContent = `© Copyright Termly ${getCurrentYear()}`

function getCurrentYear() {
	const date = new Date();
	const year = date.getFullYear();
	return year;
}