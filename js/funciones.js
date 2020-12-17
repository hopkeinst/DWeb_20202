var editando = false;
var nEdit = 0;
var thisID = "#";
var thisIDedit = "#";

var datos = [
	{
		alimento: "Arándano",
		calorias: 49,
		grasas: 0.2,
		proteina: 0.4,
		carbohidratos: 12.7,
		estado: true
	},{
		alimento: "Plátano",
		calorias: 90,
		grasas: 0.3,
		proteina: 1,
		carbohidratos: 23.5,
		estado: false
	},{
		alimento: "Cereza",
		calorias: 46,
		grasas: 0.4,
		proteina: 0.9,
		carbohidratos: 10.9,
		estado: false
	},{
		alimento: "Fresa",
		calorias: 37,
		grasas: 0.5,
		proteina: 0.8,
		carbohidratos: 8.3,
		estado: true
	}
];

function editarFila(fila){
	var filaEdit = fila+"edit";
	console.log(fila);
	console.log(filaEdit);
	document.getElementById(fila).style.display = "none";
	document.getElementById(filaEdit).style.display = "table-row";
}

function returnImage(estado){
	if(estado == true){
		image = "images/good.png";
	}else{
		image = "images/bad.png";
	}
	return image;
}

function returnTitleImg(estado){
	if(estado == true){
		var title = "Producto\xa0en\xa0BUEN\xa0estado";
	}else{
		var title = "Producto\xa0en\xa0MAL\xa0estado,\xa0CUIDADO!";
	}
	return title;
}