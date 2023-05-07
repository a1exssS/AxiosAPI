import axios from "axios"
import unpackData from "./cart"

export default function sentData(counter, price, boughtProduct) {
	let send = axios.post('https://fakestoreapi.com/products', {
		price: {
			counter,
			price,
			boughtProduct
		}
	})
	send.then((res) => {
		localStorage.setItem('boughtItem', JSON.stringify(res.data))
		let data = res.data
		unpackData(data)
	})
}