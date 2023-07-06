const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const user = document.getElementById('user_id');
const signin = document.getElementById('signin');
const userId = localStorage.getItem('user_id');


const reload = () => {
	if (userId) {
		user.innerHTML = userId;
	}
}
const request = (data) => {
	if (data.success) {
		signin.classList.remove('signin_active');
		welcome.classList.add('welcome_active');
		user.innerHTML = data.user_id;
		localStorage.setItem('user', data.user_id);
	} else {
		alert('Неверный логин/пароль');
	}
	form.reset();
};


form.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = new FormData(form);

	fetch(form.action, {
			method: 'POST',
			body: formData,
		})

		.then(response => response.json())
		.then(data => request(data))
		.catch((error) => console.log(error));

});

document.addEventListener('DOMContentLoaded', reload);