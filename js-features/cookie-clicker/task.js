const cookieCounterEl = document.getElementById('clicker__counter');
const cookieClickerEl = document.getElementById('cookie');
let cookieCounter = 0;

cookieClickerEl.onclick = function cookieClicker() {
	cookieCounter++;
	cookieCounterEl.textContent = cookieCounter;
}
cookieClickerEl.onmousedown = function changeSize() {
	cookieClickerEl.width = 220;

}
cookieClickerEl.onmouseup = function changeSize() {
	cookieClickerEl.width = 200;
}