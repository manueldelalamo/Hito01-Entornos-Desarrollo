function calcularPrecio(){
    let lugar = document.getElementById('listado').value;
    let precio =0;
    let dormitorio = document.getElementsByName('piso');
    let mejora = document.getElementsByName('mejoras');
    let aumento=0;

    if(dormitorio[0].checked==true){
		metros=50;
    }
	else if(dormitorio[1].checked==true){
		metros=70;
    }
	else{
		metros=100;
    }

    if (lugar =="sanblas"){
        precio=20;
    }
    else if(lugar=="hortaleza"){
        precio=25;
    }
    else if(lugar=="retiro"){
        precio=30;
    }
    else{
        precio=23;
    }

    for (let i = 0; i < mejora.length; i++) {
        if(mejora[i].checked==true){
           aumento+=0.03; 
        }
    }
    
    let total=precio*metros;
    let totalaumento=total*aumento;
    let totalfinal=total+totalaumento;
    let datos = "<p>El precio total de la zona " + lugar + " es de : "+precio+"</p>"+
    "<p>El precio de alquiler sin mejora es de : "+ total +"</p>"+
    "<p>El aumento por mejoras es del : "+ aumento +"</p>"+
    "<p>El precio total con acumulador es : "+ totalfinal +"</p>"
    ;

    document.getElementById("salida").innerHTML = datos;
}