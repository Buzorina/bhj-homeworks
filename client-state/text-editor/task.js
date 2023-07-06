const editor = document.getElementById('editor');
const savedText = localStorage.getItem('text')

editor.addEventListener('input', () => {
	localStorage.setItem('text', editor.value);
	
});

editor.value = savedText;
