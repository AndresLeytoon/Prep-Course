// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 33;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  
  return str;
}


//------------------------------------------------------------

function suma(x, y) {
  
  return x + y;
}


//------------------------------------------------------------

function resta(x, y) {
  var resultado = x - y;
  return resultado;
}

//------------------------------------------------------------

function multiplica(x, y) {
  var  resultado = x * y;
  return resultado;
}


//------------------------------------------------------------

function divide(x, y) {
  let divide = x / y;
  return divide;
}


//------------------------------------------------------------

function sonIguales(x, y) {
  let resultado = [x, y];
  if (resultado[0] == resultado[1]) {
    return true;
  } else {
    return false;
  }
}


//------------------------------------------------------------

function tienenMismaLongitud(str1, str2) {
  let resultado = [str1, str2];
  if (resultado[0].length == resultado[1].length) {
    return true;
  } else {
    return false;
  }
}
tienenMismaLongitud("hola", "hol");

//------------------------------------------------------------

function menosQueNoventa(num) {
  
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}
menosQueNoventa(89);

//------------------------------------------------------------

function mayorQueCincuenta(num) {
  
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}
mayorQueCincuenta(50);

//------------------------------------------------------------

function obtenerResto(x, y) {
  var resultado = x % y;
  return resultado;
}
obtenerResto(10, 3);

//------------------------------------------------------------

function esPar(num) {

  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}


//------------------------------------------------------------

function esImpar(num) {
  var numero = num;

  if (numero % 2 == 1) {
    return true;
  } else {
    return false;
  }
}
esImpar(1);

//------------------------------------------------------------

function elevarAlCuadrado(num) {
  var resultado = num ** 2;
  return resultado;
}
elevarAlCuadrado(4);

//------------------------------------------------------------

function elevarAlCubo(num) {
  var resultado = num ** 3;
  return resultado;
}
elevarAlCubo(4);

//------------------------------------------------------------

function elevar(num, exponent) {
  var resultado = num ** exponent;
  return resultado;
}
elevar(4, 2);

//------------------------------------------------------------

function redondearNumero(num) {
  const resultado = num;
  return Math.round(resultado);
}
redondearNumero(1.6);

//------------------------------------------------------------

function redondearHaciaArriba(num) {
  
  
  return Math.ceil(num);
}
redondearHaciaArriba(1.75);

//------------------------------------------------------------

function numeroRandom(min, max) {
  return Math.random();
}
numeroRandom(0, 1);

//------------------------------------------------------------

function esPositivo(numero) {
  var pos = 1;
  var neg = -1;
  var neutro = 0;

  var msn = ["Es positivo", "Es negativo", false];

  if (numero >= pos) {
    return msn[0];
  } else if (numero <= neg) {
    return msn[1];
  } else if (numero == neutro) {
    return msn[2];
  }
}
esPositivo(0);

//------------------------------------------------------------

function agregarSimboloExclamacion(str) {
  var simbolo = "!";
  return str + simbolo;
}
agregarSimboloExclamacion("Hello Word");

//------------------------------------------------------------

function combinarNombres(nombre, apellido) {
  return nombre + " "+ apellido;
}
combinarNombres("William", " Leyton");

//------------------------------------------------------------

function obtenerSaludo(nombre) {
  
  return `Hola ${nombre}!`
}
obtenerSaludo(" William");

//------------------------------------------------------------

function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho;
}
obtenerAreaRectangulo(4, 5);

//------------------------------------------------------------

function retornarPerimetro(lado) {
  return 4 * lado;
}
retornarPerimetro(33);

//------------------------------------------------------------

function areaDelTriangulo(alto, ancho) {
  return (alto * ancho) / 2;
}
areaDelTriangulo(3, 7);

//------------------------------------------------------------

function deEuroAdolar(euro) {
  
   return euro * 1.2;
}
deEuroAdolar(1);

//------------------------------------------------------------

function esVocal(letra) {
  var vocales = ["a", "e", "i", "o", "u"];
  var msn = ["Es vocal", "Dato incorrecto"];

  if (
    vocales[0] === letra ||
    vocales[1] === letra ||
    vocales[2] === letra ||
    vocales[3] === letra ||
    vocales[4] === letra
  ) {
    return msn[0];
  } else {
    return msn[1];
  }
}
esVocal("");

//------------------------------------------------------------
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo, 
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
