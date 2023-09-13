//Operaciones matematics
/* let x=5
let y=9
let z=2
let suma=z+y+3
let rest=z-3-1
let divid=z/3/x
let mult=z*3*y
console.log("suma:",suma)
console.log("resta:",rest)
console.log("divide:",divid)
console.log("multiplica:",mult) */
/* var mensaje="HolA mUndo";
var tamaño=mensaje.length;
var sustraer=mensaje.substr(0,5);
var edad=10
var convertstring=edad.toString();
var mayuscula=mensaje.toUpperCase();
var minuscula=mensaje.toLowerCase();
console.log("mensaje en numeros:", tamaño);
console.log("mensaje de sustraer:", sustraer);
console.log("convertir a string(numeritos):", convertstring);
console.log("mayuscula",mayuscula);
console.log("minuscula",minuscula); */
/* let x=809
let y=20
let z=13
if (x>y){
    alert("x es mayor a y")
} else{
    alert("x es menor a y")
} */
/* for(let x=1; x<10; x++){
    console.log(x)
} */
/* let x=0
while(x<2000){
    console.log(x);
    x= x+1;
} */
/*       
//GENERADOR DE NUMERO ALEATORIO PARA ADIVINAR//
let generatednumber = parseInt(Math.random()*100);
console.log(generatednumber)
let numeroingresado = -1;
let intentosmaximos = 5;
let intentosgastados = 0;
let correcto = false;
while(!correcto && intentosgastados<intentosmaximos){
    numeroingresado=prompt("Ingrese un numero entre 0 y 100");
    intentosgastados++;
    if (generatednumber==numeroingresado){
        correcto=true;
        alert(`Ganaste ahora si puedes entrar a la pagina en paz. Usaste ${intentosgastados} de tus intentos`);
    } else if(generatednumber<numeroingresado){
        alert(`El numero es mayor al generado. Te gastaste ${intentosgastados} intento/s`);
    } else{
        alert(`El numero es menor al generado Te gastaste ${intentosgastados} intento/s`);
    }
}
if(!correcto){
    alert(`Perdiste. Sigue a la pagina igual. El numero era ${generatednumber}`);
}
*/
// CARRITO DE COMPRAS //
/*
let menu = "Seleccione una accion:\n 1.Productos disponibles \n 2.Agregar producto \n 3.Observar Carro \n 4.Finalizar Compra";
let productos = ["Camisetas","Videojuego aleatorio","Agua","Comida","Cama"];
let precios = [12,50,5,5,80];
let listaproductos = "";
//bucle para recorrer los productos de la lista//
for(let x=0; x<productos.length; x++){
    listaproductos += `${productos[x]} - S/${precios[x]}\n`;
}
let opcion = -1;
let carro = [];
let total = 0;
let productoelegido = "";
let encontrado = false;
let textocarrito = "";
alert("Bienvenido a mi tienda!");
while(opcion!="4"){
    opcion = prompt(menu);
    switch(opcion){
        case("1"):
            alert(listaproductos)
            break; 
        case("2"):
            productoelegido = prompt("Escribe el nombre del producto que deseas agregar");
            for(let x=0; x<productos.length; x++){
                if (productoelegido.toLowerCase()==productos[x].toLowerCase()){
                    carro.push(productoelegido);
                    total += precios[x];
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado){
                alert("No se encontro el producto que buscas. Quisas te equivocaste al escribirlo");
            }
            encontrado=false;
            break; 
        case("3"):
            textocarrito = "";
            textocarrito += "Bienvenido al carrito\n";
            for(let y=0; y<carro.length; y++){
                textocarrito += carro[y] + "\n";
            }
            textocarrito += `total: S/${total}`;
            alert(textocarrito);
            break; 
        case("4"):
            alert("Gracias por la visita")
            break; 
    }
    
}
*/
/*
let cliente = "";
let validarcliente = false;
let opcion = -1;
listaDNI = ["32523","43123438","8324575231","5946226","54335","1243"];
listacontraseñas = [1553,1894,1134,2314,8743,9027];
listasaldo = [1300,1000000000,0,0,9876,5000];
function menu(){
    let menu = "Seleccione una accion:\n 1.Consultar saldo \n 2.Retirar dinero \n 3.Agregar dinero \n 4.Cambiar contraseña \n 5.Finalizar";
    let opcion = prompt(menu);
    return opcion;
}
function validarcredenciales(){
    let DNI = prompt("Ingrese su DNI");
    let position = -1;
    let existeDNI = false;
    for(let x=0; x<listaDNI.length; x++){
        if(DNI == listaDNI[x]){
            existeDNI = true;
            position = x;
            break;
        }
    }
    if (!existeDNI){
        alert("No encontrado. Intente nuevamente");
        return false;
    }
    let passcorrect = false;
    let password = "";
    let intentos = 3;
    while (!passcorrect && intentos>0){
        password = prompt("Ingrese contraseña");
        if(existeDNI && password==listacontraseñas[position]){
            passcorrect=true;
            validarcliente = true;
            return position;
        }
        else{
            alert("Contraseña incorrecta");
        }
        intentos -= 1;
    }
    alert("Te has quedado sin intentos");
    return false;
}
function mostrarsaldo(position){
    alert(`Tu saldo es de ${listasaldo[position]}`);
}
function retirardinero(position){
    mostrarsaldo(position);
    retiro = parseInt(prompt("Monto a retirar"));
    autorizado = false;
    while (!autorizado){
        if (retiro>listasaldo[position]){
            alert("Monto ingresado mayor al maximo");
        }
        else{
            autorizado=true
            let confirmacion = prompt(`¿Deseas retirar $${retiro}?. Escriba (S), si deseas retirar o escriba cualquier letra para cancelar`)
            if (confirmacion.toLowerCase()=="s" || confirmado.toLowerCase()=="si"){
                listasaldo[position] -= retiro;
                alert(`retiro exitoso, tu saldo actual es de $${listasaldo[position]}`);
            }
            else{
                alert("Transaccion cancelada");
            }
        }
    }
}
function Addmoney(position){
    let monto = parseInt(prompt("Ingrese el monto que va a añadir"));
    listasaldo[position] += monto;
    alert(`Se agrego correctamente el monto, tu saldo actual es de $${listasaldo[position]}`);
}
function cc(position){
    nuevac = prompt("Ingrese nueva contraseña");
    cnc = prompt("Seguro? vuelve a escribir la nueva contraseña")
    if (nuevac == cnc){
        listacontraseñas[position] = nuevac;
        alert("contraseña cambiada correctamente");
    }
    else{
        alert("Contraseñas no coinciden vuelva a intentar");
    }
}
function nuevaop(){
    let op = prompt("desea hacer otra operacion? escriba (s) si quiere seguir y cualquier otra cosa si no quiere seguir");
    if (op.toLowerCase() == "s" || op.toLowerCase() == "si"){
        return true;
    }
    else{
        return false;
    }
}


alert("Bienvenido al cajero automatico. Por favor entre a su cuenta");
while (!validarcliente){
    
    cliente = validarcredenciales();
}
while (typeof(cliente) == "number" && opcion != "5"){
    opcion = menu();
    if (opcion == "5"){
        alert("Gracias por usar nuestros servicios");
    }
    switch (opcion){
        case"1":
            mostrarsaldo(cliente);
            nuevaop();
            break;
        case"2":
            retirardinero(cliente);
            nuevaop();
            break;
        case"3":
            Addmoney(cliente);
            nuevaop();
            break;
        case"4":
            cc(cliente);
            nuevaop();
            break
    }
    if (!nuevaop){
        opcion = "5";
    }
}
*/
let button = document.getElementById("emitir");
button.addEventListener("click", validacion);
function validacion(){
    let Contenedor = document.getElementById("container");
    let Checkbox = document.getElementById("check");
    let Nombre = document.getElementById("Nombre");
    let Apellido = document.getElementById("Apellido");
    let nacimiento = document.getElementById("nac");
    let User = document.getElementById("User");
    let Pais = document.getElementById("Paises");
    let alertnombre = document.getElementById("alertnombre");
    let alertapellido = document.getElementById("alertapellido");
    let alertnacimiento = document.getElementById("alertnac");
    let alertuser = document.getElementById("alertuser");
    console.log("funciona",Checkbox);
    if(Nombre.value.trim().length<2){
        alertnombre.style.display="block";
    }
    else{
        alertnombre.style.display="none"
    }
    if(Apellido.value.trim().length<2){
        alertapellido.style.display="block";
    }
    else{
        alertapellido.style.display="none"
    }
    if(nacimiento.value.trim().length<1){
        alertnacimiento.style.display="block";
    }
    else{
        alertnacimiento.style.display="none"
    }
    if(User.value.trim().length<4){
        alertuser.style.display="block";
    }
    else{
        alertuser.style.display="none"
    }
    if(Checkbox.checked==true){
        Contenedor.style.backgroundColor="green"
    }
    else{
        Contenedor.style.backgroundColor="red"

    }
}
