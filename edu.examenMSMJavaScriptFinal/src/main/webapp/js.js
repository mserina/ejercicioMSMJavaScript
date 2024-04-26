/**
 * 
 */

let listaUsuario = [];
 
 /**
  * Funcion para añadir envios
  */
 function añadirDatos(){

	
	nombre = prompt("Inserte nombre del clientes");
	coste = prompt("Inserte coste");
	let dia = prompt("Inserte dia de la entrada del paquete");
	let dia2 = (Number(dia));
	let mes = prompt("Inserte mes de la entrada del paquete");
 	let anyo = prompt("Inserte año de la entrada del paquete");
 	
 	let fechaEntradaS = dia +"-"+ mes +"-"+  anyo;
 	let fechaSalida = ((dia2 + 5)  +"-"+ mes +"-"+  anyo);
 	
 	 	document.getElementById("nombre").innerHTML = "";

 	listaUsuario.push([nombre, coste, fechaEntradaS, fechaSalida]);
 	listaUsuario.forEach(function (numero){
		
		
		document.getElementById("nombre").innerHTML+=
				"<tr>" +
					"<td><strong><h3>" + numero[0] +"</h3></strong></td>" +
					"<td><strong><h3>" + numero[1] + "</h3></strong></td>" + 
					"<td><strong><h3>" + numero[2] + "</h3></strong></td>" +
					"<td><strong><h3>" + numero[3] + "</h3></strong></td>"
				"</tr>"
		 
	 })
 }
 
 /**
  * Funciones para eliminar envios
  */
 function quitarDatos(){
	 nombre = prompt("Inserte nombre del clientes");
	 listaUsuario.forEach(function (numero){
		if(nombre==numero[0])
		{
		 	numero[0]="";
		 	numero[1]="";
		 	numero[2]="";
		 	numero[3]="";
	 	}
	 	
	 })
 }
 
 
 
 

 