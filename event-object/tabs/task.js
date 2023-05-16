let tabs = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		let index = [...tabs].indexOf(tab);
		[...tabs][index].classList.add('tab_active');
		[...tabContent][index].classList.add('tab__content_active');

		let inactiveTab = [...tabs].filter(i => i !== [...tabs][index]);
		inactiveTab.forEach(i => i.classList.remove('tab_active'));

		let inactiveTabContent = [...tabContent].filter(i => i !== [...tabContent][index]);
		inactiveTabContent.forEach(i => i.classList.remove('tab__content_active'));
	});
});