const progress = document.getElementById('progress');
const form = document.getElementById('form');
const file = document.getElementById('file');



form.addEventListener('submit', (e) => {
	e.preventDefault();
	const fileToUpload = file.files[0]
	const xhr = new XMLHttpRequest();
	const formData = new FormData();

	formData.append('uploadFile', fileToUpload);


	xhr.upload.addEventListener('progress', (e) => {
		const value = e.loaded / e.total;
		progress.value = value;
		console.log(value);
	});

	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
	xhr.send(formData);

});