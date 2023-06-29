const tooltip = document.querySelectorAll('.has-tooltip');

tooltip.forEach((e) => {
	const tooltipElem = document.createElement('div');
	const elRect = e.getBoundingClientRect();
	tooltipElem.style.left = elRect.left + 'px';
	tooltipElem.classList.add('tooltip');
	tooltipElem.textContent = e.title;
	e.insertAdjacentElement('afterEnd', tooltipElem);
	e.addEventListener('click', (event) => {
		tooltipElem.classList.toggle('tooltip_active');
		event.preventDefault();
	});

});