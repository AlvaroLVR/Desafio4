document.write('clase n°: 4/ Desafio 4/ alumno: Alvaro Valencia');

// for (let i = 0; i <= 3; i++) {  para saber el año 
//     let x1 = fecha.charAt(0);
//     let x2 = fecha.charAt(1);
//     let x3 = fecha.charAt(2);
//     let x4 = fecha.charAt(3);
//     año = x1+x2+x3+x4 ;
// }
// for (let i = 0; i <= 1; i++) {  para saber el dia 
//     let z1 = fecha.charAt(8);
//     let z2 = fecha.charAt(9);
//     dia = z1+z2;
//     console.log(Number (dia))
// }
// for (let i = 0; i <= 1; i++) {  para saber el mes 
//     let y1 = fecha.charAt(5);
//     let y2 = fecha.charAt(6);
//     mes  = y1+y2;
//     console.log(Number (mes))  // convierte los caracteres en numeros 
// }

let fecha = [];
let dia
let mes
let año

function datoNac(){
    fecha = document.getElementById('nacim').value;  // me devuelve la fecha de nacimiento en un String 2022--03--18
    let z1 = fecha.charAt(8); // tomo el dato que esta en el string atraves del indice
    let z2 = fecha.charAt(9);
    dia = z1+z2;
    let y1 = fecha.charAt(5);
    let y2 = fecha.charAt(6);
    mes  = y1+y2;

    switch (true) {
        case ((Number (dia)>=22) && (Number (mes) == 12)) || ((Number (dia)<=19) && (Number (mes) == 1 )): 
            console.log('tu signo es Capricornio')  
            document.write('<h1>tu signo es Capricornio</h1>')    
        break;
        case ((Number (dia)>=20) && (Number (mes) == 1)) || ((Number (dia)<=18) && (Number (mes) == 2 )):
            console.log('naciste en acuario')    
            document.write('<h1>tu signo es Acuario</h1>')    
        break;
        case ((Number (dia)>=19) && (Number (mes) == 2)) || ((Number (dia)<=20) && (Number (mes) == 3 )):
            console.log('tu signo es Psicis') 
            document.write('<h1>tu signo es Psicis</h1>')     
        break;
        case ((Number (dia)>=21) && (Number (mes) == 3)) || ((Number (dia)<=19) && (Number (mes) == 4 )):
            console.log('tu signo es Aries')  
            document.write('<h1>tu signo es Aries</h1>')      
        break;
        case ((Number (dia)>=20) && (Number (mes) == 4)) || ((Number (dia)<=20) && (Number (mes) == 5 )):
            console.log('tu signo es Tauro')  
            document.write('<h1>tu signo es Tauro</h1>')      
        break;
        case ((Number (dia)>=21) && (Number (mes) == 5)) || ((Number (dia)<=20) && (Number (mes) == 6 )):
            console.log('tu signo es Géminis')    
            document.write('<h1>tu signo es Géminis</h1>')    
        break;
        case ((Number (dia)>=21) && (Number (mes) == 6)) || ((Number (dia)<=22) && (Number (mes) == 7 )):
            console.log('tu signo es Cáncer')   
            document.write('<h1>tu signo es Cáncer</h1>')     
        break;
        case ((Number (dia)>=23) && (Number (mes) == 7)) || ((Number (dia)<=22) && (Number (mes) == 8 )):
            console.log('tu signo es Leo')
            document.write('<h1>tu signo es Leo</h1>')        
        break;
        case ((Number (dia)>=23) && (Number (mes) == 8)) || ((Number (dia)<=22) && (Number (mes) == 9 )):
            console.log('tu signo es Virgo')
            document.write('<h1>tu signo es Virgo</h1>')        
        break;
        case ((Number (dia)>=23) && (Number (mes) == 9)) || ((Number (dia)<=22) && (Number (mes) == 10 )):
            console.log('tu signo es Libra')  
            document.write('<h1>tu signo es Libra</h1>')      
        break;
        case ((Number (dia)>=23) && (Number (mes) == 10)) || ((Number (dia)<=21) && (Number (mes) == 11 )):
            console.log('tu signo es Escorpio')
            document.write('<h1>tu signo es Escorpio</h1>')        
        break;
        case ((Number (dia)>=22) && (Number (mes) == 11)) || ((Number (dia)<=12) && (Number (mes) == 12 )) :     
            console.log('tu signo es Sagitario')
            document.write('<h1>tu signo es Sagitario</h1>')
        break;
        default: console.log('waiting')
            break;
    }
}
    // Aries.       21/03 - 19/04.
    // Tauro.       20/04 - 20/05.
    // Géminis.     21/05 - 20/06.
    // Cáncer.      21/06 - 22/07.
    // Leo.         23/07 - 22/08.
    // Virgo.       23/08 - 22/09.
    // Libra.       23/09 - 22/10.
    // Escorpio.    23/10 - 21/11.
    // Sagitario    22/11 — 21/12
    // Capricornio  22/12 — 19/1
    // Acuario      20/1 — 18/2
    // Piscis       19/2 — 20/3
