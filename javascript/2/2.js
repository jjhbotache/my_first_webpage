items1 = document.getElementById("items1");
items2 = document.getElementById("items2");

description_items_1 = [];
description_items_2 = [];
for (var i = 1; i <= 8; i++) {
	description_items_1[i]=document.querySelector("#items1-description"+i);
	description_items_2[i]=document.querySelector("#items2-description"+i);
}

var ActiveDescription;

items();
description(1.1);
description(1.1);

function description(active) {
	if (ActiveDescription!=active) {
		console.log('new');
		description_items_1.forEach( function(element, index) {
			description_items_1[index].classList.add('not_show');
		});
		description_items_2.forEach( function(element, index) {
			description_items_2[index].classList.add('not_show');
		});
		if (active < 2) {
			let x=(active*10)-10;
			console.log(x);
			description_items_1[x].classList.remove("not_show");
		}
		else {
			let x=(active*10)-20;
			description_items_2[x].classList.remove("not_show");			
		}
		ActiveDescription = active;

	}
	else {
		console.log('same');
		if (active < 2) {
			let x=(active*10)-10;
			description_items_1[x].classList.add("not_show");
		}
		else {
			let x=(active*10)-20;
			description_items_2[x].classList.add("not_show");			
		}
		ActiveDescription = 1.0;
	}
	console.log(ActiveDescription);
}












function items () {
	radio1 = document.getElementById("item1").checked;
	radio2 = document.getElementById("item2").checked;
	console.log(radio1);
	console.log(radio2);
	if (radio1) {
		console.log("radio1 activado");
		items1.classList.remove("not_show");
		items2.classList.add("not_show");
	}
	else{
		console.log("radio2 activado");
		items2.classList.remove("not_show");
		items1.classList.add("not_show");
	}
}

