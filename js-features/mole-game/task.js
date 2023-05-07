
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let counterDead = 0;
let counterLost = 0;


getHole = index => document.getElementById(`hole${index}`);

for (holeIndex = 1; holeIndex < 10; holeIndex++) {
	let hole = getHole(holeIndex);


	hole.onclick = function getMole() {

		if (hole.classList.contains('hole_has-mole')) {
			counterDead++;

		} else {
			counterLost++;
		}

		if (counterDead === 10) {
            counterDead = 0;
            counterLost = 0;
			alert('Вы выиграли!');

		} else if (counterLost === 5) {
            counterDead = 0;
            counterLost = 0;
			alert('Вы проиграли!');
		}
        dead.textContent = counterDead;
        lost.textContent = counterLost;
	};

}
