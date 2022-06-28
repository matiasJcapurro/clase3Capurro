
const presupuesto = (primero) => {
    let persona = prompt('Es una persona fisica? Responsa SI, o NO en caso de ser una empresa');
    let nombre = prompt('Ingrese nombre');
    let empresaDePersona = 'Personal';
    let aver = 'Personal';
    if (persona.toUpperCase() == 'SI'){
        let empresaDePersona = prompt('habla en representacion de alguna empresa?');
        if (empresaDePersona.toUpperCase() == 'SI'){
            alert('a continuacion le pedimos que ingrese la informacion de la empresa');
            empresaDePersona = presupuesto(false);
            aver = empresaDePersona
        }
    }else aver = nombre;
    if (primero) {
        let finde = prompt('es su evento en un dia del fin de semana?');
        let personas = prompt('cuanta gente asistira al evento? (responder con numeros)');
        let horas = prompt('cuantas horas durara el evento?');
        let presupuesto = 0;
        presupuesto += personas*horas*150
        if (finde.toUpperCase() == 'SI'){
            presupuesto*=1.25
        }
        alert(`Presupuesto para ${nombre} de ${personas} personas y ${horas} horas. Presupuesto total: $${presupuesto}
         Motivo: Evento ${aver}`);
    }
    else{
        return nombre;
    }
}
presupuesto(true);