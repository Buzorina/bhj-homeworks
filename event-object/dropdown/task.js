let dropdown = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItem = document.querySelectorAll('.dropdown__item');

dropdown.addEventListener('click', function() {
	dropdownList.classList.toggle('dropdown__list_active')
});


dropdownItem.forEach(dropdownItem => {
	dropdownItem.addEventListener('click', (event) => {
		event.preventDefault();
		let selectedItem = dropdownItem.querySelector('.dropdown__link').textContent;
		console.log(selectedItem);
		dropdown.textContent = selectedItem;
		dropdownList.classList.remove('dropdown__list_active');
	});
});