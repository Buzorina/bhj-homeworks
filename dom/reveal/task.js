const revealBlocks = [...document.querySelectorAll('.reveal')];
revealBlocks.forEach((reveal) => {
	window.addEventListener('scroll', () => {
		const viewHeight = window.innerHeight;
		const elementTop = reveal.getBoundingClientRect().top;
		console.log(viewHeight);
		if (elementTop < viewHeight && elementTop > 0) {
			reveal.classList.add('reveal_active');
		} else {
			reveal.classList.remove('reveal_active');
		}
	});
});