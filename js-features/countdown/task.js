const countDownEl = document.getElementById('timer');
const counter = setInterval(countDown, 1000);
let initialTime = 59;



function countDown() {

	if (initialTime >= 0) {
		countDownEl.textContent = initialTime;
		initialTime--;
	} else {
		clearInterval(counter);
		alert('Вы победили в конкурсе!');
	}

}