/*
con una funcion que se encargar de checkear el siguiente input de su conjunto,
y hacerla que se repita cada x segs se automatiza un carousel
*/





const carousels = 4
//cantidad  de caruseles

//para cada uno, le declaro un setInterval
for(var z = 1; z <=carousels; z++){
	console.log(z)
	interval(z)
}

/*
setInterval(function () {
		next(1)},
		((Math.floor(Math.random() * 8))+4)*500
		)
setInterval(function () {
		next(2)},
		((Math.floor(Math.random() * 8))+4)*500
		)
*/

function interval(parameter){
	setInterval(function () {
		next(parameter)},
		((Math.floor(Math.random() * 8))+4)*500
		)
}


//Se encarga de checkear 1 por uno del carousel que se le pase por parametro
function next(carousel) {
	console.log("carousel:", carousel)
    var wanted = document.getElementsByName("carousel-css"+carousel.toString());
    console.log("carousel-css"+carousel.toString())
    for (var i = 0; i < wanted.length; i++) {
        if (wanted[i].checked == true) {
            if (i == wanted.length - 1)
            {
                wanted[0].checked = true;
            } else {
                wanted[i + 1].checked = true;
            }
            break;
        }
    }
}