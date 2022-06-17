alert("bienvenido a la calculadora de numeros primos, usted elije un numero y el programa le dice si es primo o no")
var continuar = "si";
var num;
do{
    num = prompt("Ingrese un numero");
    let primo = true;
    for (let i = 2; i < num; i++){
        if (num%i == 0){
            primo = false;
            continue;
        }
    }
    alert(primo);
    continuar = prompt("Desea calcular otr numero? Responda 'si' para continuar");
    }while (continuar == "si");