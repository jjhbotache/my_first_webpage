var descriptions = [];
for(var i = 1; i <= 5; i++){
	descriptions[i] = document.getElementById("text" + i.toString());
	descriptions[i].classList.toggle("dont_show");
	console.log(descriptions[i]);
}

function show_description(slide) {
	console.log('pressed ', slide);
	if ( window.screen.width < 769) {
		console.log('get into the if');
		descriptions[slide].classList.toggle("dont_show");
		console.log('get into the case', slide);
	}
}