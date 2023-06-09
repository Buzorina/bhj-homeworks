const size = document.querySelectorAll('.font-size');
const content = document.querySelector('.book__content');

size.forEach((item) => {
	item.addEventListener('click', (el) => {
		el.preventDefault();

		let sizeAt = item.dataset.size;
		content.classList = 'book';
		size.forEach((e) => e.classList.remove('font-size_active'));
		if (sizeAt) {
			content.classList.add('book_fs-' + sizeAt);
			item.classList.add('font-size_active');
		} else {
			item.classList.add('font-size_active');
			return;
		}
	});
});