// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;

  }
}
console,log()

//--------------------------------------------------------------

function mayoriaDeEdad(edad) {
  var edadPermitida = 18;
  var msn = ["Allowed", "Not allowed"];
  if (edad >= edadPermitida) {
    return msn[0];
  } else {
    return msn[1];
  }
}


//--------------------------------------------------------------

function conection(status) {
  var msn = ["Online", "Away", "Offline"];
  switch (status) {
    case 1:
      status = msn[0];
      break;
    case 2:
      status = msn[1];
      break;
    default:
      status = msn[2];
  }
  return status;
}
conection(1);

//--------------------------------------------------------------

function saludo(idioma) {
  var msn = ["Guten Tag!", "Ni Hao!", "Hello!", "Hola!"];
  switch (idioma) {
    case "aleman":
      idioma = msn[0];
      break;
    case "mandarin":
      idioma = msn[1];
      break;
    case "ingles":
      idioma = msn[2];
      break;
    default:
      idioma = msn[3];
  }
  return idioma;
}
saludo("aleman");
console.log("saludo");

//--------------------------------------------------------------

function colors(color) {
  var msn = [
    "This is blue",
    "This is red",
    "This is green",
    "This is orange",
    "Color not found",
  ];

  switch (color) {
    case "blue":
      color = msn[0];
      break;
    case "red":
      color = msn[1];
      break;
    case "green":
      color = msn[2];
      break;
    case "orange":
      color = msn[3];
      break;
    default:
      color = msn[4];
  }
  return color;
}
colors("blue");

//--------------------------------------------------------------

function esDiezOCinco(numero) {
  if (numero == 10 || numero == 5) {
    return true;
  } else {
    return false;
  }
}
esDiezOCinco(10);

//--------------------------------------------------------------

function estaEnRango(numero) {
  if (numero < 50 && numero > 20) return true;
  return false;
}

//--------------------------------------------------------------

function esEntero(numero) {
  if (numero - Math.floor(numero) == 0) {
    return true;
  } else {
    return false;
  }
}
esEntero(-10);

//--------------------------------------------------------------

function fizzBuzz(numero) {
  if (numero % 15 === 0) {
    return "fizzbuzz";
  } else if (numero % 3 === 0) {
    return "fizz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else {
    return numero;
  }
}

//--------------------------------------------------------------

function operadoresLogicos(num1, num2, num3) {
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  }
  if (num3 > num2 && num3 > num1) {
    return num3 + 1;
  }
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  }
  if (num1 > num2 && num1 > num3 && num2 !== num3) {
    return "Número 1 es mayor y positivo";
  } else {
    return false;
  }

  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
}

function esPrimo(numero) {
  if (numero == 0 || numero == 1 || numero == 4) return false;
  for (let x = 2; x < numero / 2; x++) {
    if (numero % x == 0) return false;
  }
  // Si no se pudo dividir por ninguno de los de arriba, sí es primo
  return true;
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
}

function esVerdadero(valor) {
  if (valor === true) {
    return "Soy verdadero";
  } else if (valor === false) {
    return "Soy falso";
  }
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
}

function tablaDelSeis() {
  var num = 6;
  var tabla = [];

  for (var i = 0; i <= 10; i++) {
    tabla.push(i * num);
  }
  return tabla;

  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
}

function tieneTresDigitos(numero) {

  if (numero > 99 && numero < 1000)  return true;
    return false;
  
  
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
}

function doWhile(numero) {
  var x = 0;
  do {
    numero = numero + 5;
    x = x + 1;
  }while (x<8);
  return numero;
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile,
};
