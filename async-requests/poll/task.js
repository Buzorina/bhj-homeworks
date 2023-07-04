const question = document.getElementById('poll__title');
const answersContainer = document.getElementById('poll__answers');


const questions = (value) => {
	question.innerHTML = `${value.data.title}`;
	const answers = value.data.answers.map(item => {
		const button = document.createElement('button');
		button.classList.add('poll__answer');
		button.textContent = `${item}`;
		return button;
	});
	answersContainer.append(...answers);
};


const voteAccepted = () => {
	document.querySelectorAll('.poll__answer').forEach(item => {
		item.addEventListener('click', () => {
			alert('Спасибо, ваш голос засчитан!');
			location.reload();
		});
	});
};

fetch('https://students.netoservices.ru/nestjs-backend/poll')
	.then(response => response.json())
	.then(value => {
		questions(value);
		voteAccepted();
	}).catch((err) => console.log('Fetch error: ', err));