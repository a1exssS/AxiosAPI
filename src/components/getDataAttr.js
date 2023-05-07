export default function getAttr(event) {
	const parent = event.target.offsetParent;
	return Number(parent.getAttribute('data-number')) - 1;
}