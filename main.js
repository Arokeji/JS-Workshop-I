
//Ejercicio 1
console.log("-------------------------------\nEjercicio 1\n-------------------------------\n");

/*
        Crear una función que devuelva el número de vocales 
        que tiene el string que le pasemos como parámetro.

        Consideramos que el string solo tiene letras minúsculas y espacios.
*/

let text = "Anivia the cryophoenix and Fiddlesticks the demon scarecrow";

let vowelCounter = (text) => {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let vowelsSum = 0;

    for(let i = 0; i < text.length; i++) {
        if (vowel.indexOf(text[i].toLowerCase()) != -1) {
            vowelsSum++;
        }
    }
    
    console.log(vowelsSum);
}

vowelCounter(text);

//Ejercicio 2
console.log("\n-------------------------------\nEjercicio 2\n-------------------------------\n");

/*
        Si enumerásemos todos los números naturales por debajo de 10 que 
        fuesen múltiplos de 3 y de 5 tendríamos el siguiente listado (3, 5, 6 y 9). 
        La suma de estos múltiplos sería 23.

        Crea un función que devuelva la suma de todos los múltiplos de 3 y 5 del 
        número que le pasemos.

        En caso de que el número sea múltiplo de ambos solo habrá que contarlo 
        un vez.
*/

let num = 2;

let multiplos = (num) => {
    let numeros = [3, 5, num];
    let numerosOcupados = [];
    let calculo = 0;
    let suma = 0;
    let multiplicador = 1;

    for (let x of numeros) {
        multiplicador = 1;
        calculo = x * multiplicador;
        
        while (calculo < 10) {
            
            if (numerosOcupados.indexOf(calculo) == -1){
                numerosOcupados.push(calculo);
                //console.log(x + " por " + multiplicador + " es " + calculo);
            }
            multiplicador++;
            calculo = x * multiplicador;
        }
    }

    for(let i in numerosOcupados) {
        suma += numerosOcupados[i];
    }

    console.log(suma);
}

multiplos(num);

//Ejercicio 3
console.log("\n-------------------------------\nEjercicio 3\n-------------------------------\n");

/*
        Crea una función que reciba como argumento un array de números 
        y devuelva aquel que aparecen únicamente un número impar de veces.

        Ejemplos: 

            [1]         → Devuelve el número 1, ya que aparece una única vez
            [3,3,5]     → Devuelve el 5, ya que aparece 1 vez.
            [2,1,1,2,2] → Devuelve 2, ya que aparece 3 veces
*/

let nuestroArray = [2,3,3,3,1,1,2];

let comprobarImpar = (array) => {
  let resultado;
  let contador = 1;
  array.sort();

for (let i = 0; i < array.length; i++){
    if(array[i] === array[i+1]){
            contador = contador + 1;
        } else {
            if( contador % 2 !== 0 ){
                resultado = array[i];
            }
        contador = 1;
        }
    }
    return resultado;
}

let resultado = comprobarImpar(nuestroArray);

console.log(resultado);

//Ejercicio 4
console.log("\n-------------------------------\nEjercicio 3\n-------------------------------\n");

/*
        Crea una función que reciba como parámetro un string y devuelva otro, 
        remplazando las letras por su posición en el alfabeto.

        Si algún caracter no se encuentra, simplemente lo ignoramos.
*/

let abecedario = "0abcdcefghijklmnñopqrstuvwxyz";
let frase = "Anivia the cryophoenix and Fiddlesticks the demon scarecrow";

let alfabetoFrase  = (str) => {
    let fraseModificada = "";

    for (let x = 0; x < str.length; x++) {
        if (abecedario.indexOf(str[x].toLowerCase()) != -1){
            fraseModificada += abecedario.indexOf(str[x].toLowerCase()) + ".";
        }
        
    }

    console.log(fraseModificada);
    
    //Otra forma

    for(let x = 0; x < abecedario.length; x++){
        str = str.toLowerCase().replaceAll(abecedario[x], x + ".");
    }

    console.log(str);
    
}

alfabetoFrase(frase);

//Ejercicio 5
console.log("\n-------------------------------\nEjercicio 5\n-------------------------------\n");

/*
    Crea una función que reciba una serie de arrays como argumentos 
    y devuelva uno único ordenado.

    Ejemplo: 
        Recibe: 
            ([['Cristiano', 'Messi'], ['Neymar', 'Mbappe', Benzema'], 
            ['Vinicius', 'Kane'])  
        Devuelve: 
            ['Benzema', 'Cristiano', 'Kane', 'Mbappe', 'Messi', 
            'Neymar', 'Vinicius']
*/

let arrayJugadores = [['Cristiano', 'Messi'], ['Neymar', 'Mbappe', 'Benzema'], ['Vinicius', 'Kane']];

let ordenarArray = (ar) => {
    let arrayOrdenado = [];

    for (let i of ar){
        arrayOrdenado = arrayOrdenado.concat(i);
    }

    return arrayOrdenado.sort();
}

console.log(ordenarArray(arrayJugadores));

//Ejercicio 6
console.log("\n-------------------------------\nEjercicio 6\n-------------------------------\n");

/* 
        Crea una función que reciba un array de números, la posición inicial 
        y final del nuevo array (opcional), y devuelva el nuevo array.

        Ejemplo 1: ([1, 2, 3], 0, 1) // => [1]
        Ejemplo 2: ([1, 2, 3], 1) // => [2,3]
*/

function cortarArray(array, posInicial, posFinal = 5) { //posFinal es 5 si no le llega nada
    
    //posicionFinal = undefined || 5; Coge el valor despues del OR si le llegfa undefined

    return array.slice(posInicial, posFinal);
}

console.log(cortarArray([1, 2, 3], 0, 1));
console.log(cortarArray([1, 2, 3], 1));

//Ejercicio 7
console.log("\n-------------------------------\nEjercicio 7\n-------------------------------\n");

/* 
    Crea una función que  reciba un array de números y 
    devuelva los números que coinciden con su posición en el array.

    Ejemplos:
        [1,2,5,3] → Devuelve [3] que se encuentra en la posición 3 del array
        [1,5,20,4,16,8,6] → Devuelve [6] que se encuentra en la posición 6 del array
        [10,1,20,3,16,8,10] → Devuelve [1,3] ya que ambos coinciden.
*/ 

let arrayCoincidencia = [10,1,20,3,16,8,10];

function coincidencia(array) {
    let numerosCoinciden = [];

    for(let i in array) {
        if (array[i] == i) {
            numerosCoinciden.push(i);
        }
    }

    return numerosCoinciden;
}

console.log(coincidencia(arrayCoincidencia));

//Ejercicio 8
console.log("\n-------------------------------\nEjercicio 8\n-------------------------------\n");

/* 
        Tenemos una flota de vehículos y con las nuevas restricciones de 
        movilidad en Madrid, nos piden que todos tengan etiqueta de contaminación.

        Crea una función que reciba un array de objetos-coche y devuelva un 
        nuevo array con los objetos-coche. Cada coche tendrá un nueva propiedad 
        que sea etiqueta ( con valor ‘ECO’ en caso de que el coche sea híbrido y 
        ‘C’ en caso de que sea gasolina). 

        Dentro de la flota de coches solo tenemos esas 2 opciones así que no hay 
        que preocuparse por ninguna otra.

        Ejemplo:
            Entrada: 
                [{id: 1, modelo: ‘híbrido’, matricula:’4565HLM’ },
                {id: 2, modelo: ‘gasolina’, matricula:’5678MNL’ },
                {id: 3, modelo: ‘híbrido’, matricula:’1111LLL’ }] 

            Salida:
            [{id: 1, modelo: ‘híbrido’, matricula:’4565HLM’, etiqueta:’ECO’},
            {id: 2, modelo: ‘gasolina’, matricula:’5678MNL’, etiqueta:’C’},
            {id: 3, modelo: ‘híbrido’, matricula:’1111LLL’, etiqueta:’ECO’ }].
*/ 

let coches = [{id: 1, modelo: 'hibrido', matricula: '4565HLM'},
    {id: 2, modelo: 'gasolina', matricula:'5678MNL'},
    {id: 3, modelo: 'hibrido', matricula:'1111LLL'}];


function anadirEtiqueta (coches) {
    for(let i in coches) {
        (coches[i].modelo === 'hibrido') ? (coches[i].etiqueta = 'ECO') : (coches[i].etiqueta = 'C');
    }

    return coches;
}

console.log(anadirEtiqueta(coches));

//Ejercicio 9
console.log("\n-------------------------------\nEjercicio 9\n-------------------------------\n");

/* 
        Crea una función que reciba la lista de regalos de los reyes magos 
        y la ordene según la propiedad elegida.

        Ejemplo:        
            Entrada: 
                    ([{nombre: 'Barbie’, categoria: 'muñecas’ },
                    {nombre: 'Lego’, categoria:’construcción’ },
                    {nombre: 'Fifa2023’, categoria:’videojuego’ }], 'nombre’);

            Salida:
                    [{nombre: 'Barbie’, categoria: 'muñecas’ },
                    {nombre: 'Fifa2023’, categoria:’videojuego’ }
                    {nombre: 'Lego’, categoria:’construcción’ }]
*/

let cartaReyes = ([{nombre: 'Barbie', categoria: 'muñecas'},
                    {nombre: 'Lego', categoria: 'construcción'},
                    {nombre: 'Fifa2023', categoria: 'videojuego' }]);

function ordenarRegalos (cartaReyes) {
    return cartaReyes.sort((a, b) => (a.nombre.toLowerCase() > b.nombre.toLowerCase()) ? 1 : -1);
}

console.log(ordenarRegalos(cartaReyes));

//Ejercicio 10
console.log("\n-------------------------------\nEjercicio 10\n-------------------------------\n");

/* 
        Crea una función que reciba un listado de jugadores con el número de 
        billetes de cada cantidad que tienen y devuelva el jugador con más dinero. 

        No habrá más de un jugador que tenga el mayor número de billetes

        Ejemplo:
       Entrada:
            [{nombre: ‘Pedro’, billetesDe5: 10, billetesDe10: 3, billetestDe50: 1 },
            {nombre: ‘Luis’, billetesDe5: 10, billetesDe10: 1, billetestDe50: 2 },
                {nombre: ‘Gon’, , billetesDe5: 5, billetesDe10: 5, billetestDe50: 5 },];

            Salida:
                Gon
*/ 

let arrayAdinerados = [{nombre: 'Pedro', billetesDe5: 10, billetesDe10: 3, billetesDe50: 1 },
                        {nombre: 'Luis', billetesDe5: 10, billetesDe10: 1, billetesDe50: 2 },
                        {nombre: 'Gon', billetesDe5: 5, billetesDe10: 5, billetesDe50: 5 }];

function quienTieneMas (array) {
    let richestGuy = {nombre: '', dinero: 0};

    for (let i = 0; i < array.length; i++) {
        if((array[i].billetesDe5 * 5 + array[i].billetesDe10 * 10 + array[i].billetesDe50 * 50) > richestGuy.dinero) {
            richestGuy.nombre = array[i].nombre;
            richestGuy.dinero = (array[i].billetesDe5 * 5 + array[i].billetesDe10 * 10 + array[i].billetesDe50 * 50);
        }
    }

    return richestGuy;
}

console.log(quienTieneMas(arrayAdinerados));

//Ejercicio 11
console.log("\n-------------------------------\nEjercicio 10\n-------------------------------\n");

/* 
    Crea una función que reciba un listado y mueva todos los 0 al final, 
    manteniendo el orden del resto de elementos.

    Ejemplo:
       Entrada: [1,0,true,0,’hola’, 5, 30, ‘a’]
       Salida: [1,true,’hola’, 5, 30, ‘a’,0,0]
*/

let listadoGeneral = [1, 0, true, 0, 'hola', 5, 30, 'a'];

function pushZeroes (array) {
    let zeroesCounter = 0;

    for (let i in array) {
        if(array[i] === 0){
            array.splice(i, 1);
            zeroesCounter++;
        }
    }

    for(let x = 0; x < zeroesCounter; x++){
        array.push(0);
    }

    return array;
}

console.log(pushZeroes(listadoGeneral));