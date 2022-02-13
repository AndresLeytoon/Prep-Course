// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x >= y) {
    return x;
  } else if (y >= x) {
    return y;
  } else {
    return y;
  }
}
obtenerMayor(3, 6);

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
mayoriaDeEdad(18);

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
  var msn = ["Guten Tag!", "Ni Hao!", "Hello!", "hola"];
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
  if (numero <= 50 && numero >= 20) {
    return true;
  } else {
    return false;
  }
}
estaEnRango(50);

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
  var msn = {
    msn: " FizzBuzz",
    msn1: " Fizz",
    msn2: " Buzz",
  };

  for (var i = 1; i < numero; i++) {
    if (i % 15 == 0) console.log(i + msn.msn);
    else if (i % 3 == 0) console.log(i + msn.msn1);
    else if (i % 5 == 0) console.log(i + msn.msn2);
    else console.log(i);
  }
  return i;
}
fizzBuzz(100);

//--------------------------------------------------------------

function operadoresLogicos(num1, num2, num3) {

  if (Math.sign (num1 > num2 && num3)){
    return "Número 1 es mayor y positivo"
  }
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
}

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
}

function doWhile(numero) {
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
