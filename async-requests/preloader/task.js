const loader = document.getElementById('loader');
const items = document.getElementById('items');

const exchangeRates = (values) => {
	for (let key in values) {
		const item = document.createElement('div');
		item.classList.add('item');
		item.innerHTML =
			`<div class="item__code">${values[key].CharCode}</div>
        <div class="item__value">${values[key].Value}</div>
        <div class="item__currency">руб.</div>`
		items.append(item);
		console.log(items)
	}
}
fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
	.then(response => response.json())
	.then(data => {
		exchangeRates(data.response.Valute);
		loader.classList.remove('loader_active');
	})

	