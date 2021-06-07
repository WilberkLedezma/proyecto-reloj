 function mostrarReloj()
 {
 	let fecha = new Date();
 	let hr = fecha.getHours();
 	let min = fecha.getMinutes();
 	let seg = fecha.getSeconds();
 	document.getElementById("fecha").innerHTML = `${hr}:${min}:${seg}`; 

 	const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
 	const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

 	let diaDeLaSemana = dias[fecha.getDay()];
 }

 const formatoHora = (hora)=>
 {
 	if(hora < 10)
 	{
 		hora = "0" + hora;
 		return hora;
 	}
 }

 setInterval(mostrarReloj, 1000);


