const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const add = document.getElementById('tasks__add');
const list = document.getElementById('tasks__list');


add.addEventListener('click', (event) => {
	event.preventDefault();
	if (input.value.trim()) {
		const item = document.createElement('div');
		item.classList.add('task');
		const title = document.createElement('div');
		title.classList.add('task__title');
		title.textContent = input.value;
		item.insertAdjacentElement('beforebegin', title);

		item.append(title);
		item.insertAdjacentHTML(
			'beforeend',
			'<a href="#" class="task__remove">&times;</a>'
		);
		list.insertBefore(item, list.firstElementChild);
		item.lastChild.addEventListener('click', () => {
			list.removeChild(item);
		});
	}
	input.value = '';
});