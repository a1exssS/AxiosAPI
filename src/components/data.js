import axios from "axios";

const data = axios.get("https://fakestoreapi.com/products").then((res) => {
	return res.data
}).then((data) => {
	return data
}).catch((error) => {
	console.error(error)
})

export default data