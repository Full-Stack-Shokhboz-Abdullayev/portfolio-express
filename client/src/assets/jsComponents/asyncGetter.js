export default async (url, options = {}) => {
	const _BASE = 'http://localhost:7777/shox-api'
	let data
	const headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
	if (options.get) {
		data = await fetch(_BASE + url)
	} else if (options.post) {
		data = await fetch(_BASE + url, {
			method: 'POST',
			headers,
			body: JSON.stringify({ ...options.body })
		})
	} else if (options.delete) {
		data = await fetch(_BASE + url + `/${options.id}`, {
			method: 'DELETE'
		})
	} else if (options.put) {
		data = await fetch(_BASE + url + `/${options.id}`, {
			method: 'PUT',
			headers,
			body: JSON.stringify({ ...options.body })
		})
	}
	data = await data.json()
	const returningData = data.data ? data.data : data
	console.log(returningData)
	return returningData
}
