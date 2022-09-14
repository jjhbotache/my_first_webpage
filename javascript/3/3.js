const ribbons_amount = 2;
var ribbons = new Array();
var descriptions = new Array();
for(var i = 1; i <= ribbons_amount; i++){
	ribbons.push(document.getElementById("ribbon"+i.toString()));
	descriptions.push(document.getElementById("description"+i.toString()));
}
for (let x = 0; x < ribbons.length; x++) {
	// ribbons[x].addEventListener("click",show_description(x));
}


console.log(ribbons);
console.log(descriptions);





function show_description(description){
	if (description == 0) {
		ribbons[0].style.zIndex = "3";
		ribbons[1].style.zIndex = "1";
		descriptions[0].style.zIndex = "2";
		descriptions[1].style.zIndex = "0";

		descriptions[0].classList.add("d1appears");
	}
	else if (description == 1){
		ribbons[0].style.zIndex = "1";
		ribbons[1].style.zIndex = "3";
		descriptions[0].style.zIndex = "0";
		descriptions[1].style.zIndex = "2";
		
		descriptions[1].classList.add("d2appears");
	}
	else{
		ribbons[0].style.zIndex = "3";
		ribbons[1].style.zIndex = "3";
		descriptions[0].style.zIndex = "0";
		descriptions[1].style.zIndex = "0";
	}
}

