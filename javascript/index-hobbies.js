var items = [];

for(var i = 1; i <= 3; i++){
	items[i] = document.getElementById("selector-" + i.toString());
	console.log(items[i]);
}
appear_description(1);

function appear_description (item) {
	switch (item) {
		case 1:
			items[1].querySelector('p').style.opacity = '1';
			items[2].querySelector('p').style.opacity = '0';
			items[3].querySelector('p').style.opacity = '0';
			break;
		case 2:
			items[1].querySelector('p').style.opacity = '0';
			items[2].querySelector('p').style.opacity = '1';
			items[3].querySelector('p').style.opacity = '0';
			break;
		case 3:
			items[1].querySelector('p').style.opacity = '0';
			items[2].querySelector('p').style.opacity = '0';
			items[3].querySelector('p').style.opacity = '1';
			break;
		
	}
	
}
