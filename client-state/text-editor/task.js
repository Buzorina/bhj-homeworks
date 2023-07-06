const editor = document.getElementById('editor');
const savedText = localStorage.getItem('text')

editor.addEventListener('input', () => {
	localStorage.setItem('text', editor.value);
});

if (savedText) {
	editor.value = savedText;
}