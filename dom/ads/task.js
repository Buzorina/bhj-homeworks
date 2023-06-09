const rotatorCase = document.querySelector('.rotator');
let index = [...rotatorCase.children].findIndex(el => el.classList.contains('rotator__case_active'));

const timerId = setTimeout(nextSentence = () => {
	[...rotatorCase.children][index].classList.remove('rotator__case_active');

	if ([...rotatorCase.children][index].nextElementSibling !== null) {
		[...rotatorCase.children][index].nextElementSibling.classList.add('rotator__case_active');
		index++;
	} else {
		document.querySelector('.rotator').firstElementChild.classList.add('rotator__case_active');
		index = 0;
	}

	setTimeout(nextSentence, 1000);
}, 1000);