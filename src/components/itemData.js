import getAttr from "./getDataAttr";
import data from "./data";
import returnData from "./unpackData";


let containerOfId;
export function btn() {
	document.querySelectorAll('.products__link').forEach((element) => {
		element.addEventListener('click', (event) => {
			containerOfId = getAttr(event)
			Promise.resolve(data).then((res) => {
				returnData(res[containerOfId])
			})
		})

	})
}