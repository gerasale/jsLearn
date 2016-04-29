/*alert ('hello world!');

// задача #1 про if ... else


var jsName = prompt ('What is the corect name jo JS?');

if (jsName == 'ECMAScript') {
	alert ('Rigth!');
}
else {
	alert ('Stupid!');
}


// задача #2 про if .., else

var dig = prompt ('Your digit?');

if (dig > '0') {
	alert ('1');
}
else if (dig == '0') {
	alert ('0');
}
else {
	alert ('-1');
}



// задача #3 про if ... else
var userName = prompt ('Who are you?');

if (userName == 'admin') {
	var password = prompt ('Enter your password');
	if (password == 'black') {
		alert ('welcome')
	}
		else if (password == null) {
			alert ('cancel');
		}
			else alert ('wrong password!')

	}
else if (userName == null) {
	alert ('cancel');
}
else alert ('wrong login');
*/

/*if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

var a = prompt ('enter digit 1');
var b = prompt ('enter digit 2');
var result = (+a + +b < 4) ? 'меньше 4' : 'больше 4';
alert (result);


var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}


var message = (login == 'Вася') ? 'hi' :
(login == 'Dir') ? 'Hello' :
(login == '') ? '' ;



var message = true;
var age = 14;
if (age >= 14 && age <=90) {
	message = !message;
}
else {message = !!message};
alert (message);


// github connect

var sum = 0;

while (true) {

  var value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );



for (var dig = 1; dig <= 10; ++dig) {
	if (dig % 2) continue;  // четность проверяется по остатку деления на 2
	alert (dig);
}

//var s = 'hello world';
//alert (s.length); // длина строки

for (var i = 0; i < 3; i++) {
  alert( "номер " + i + "!" );
}
//ниже то же самое, только с помощью while
var i = 0;

while (i < 3) {
	alert ('номер ' + i + '!');
	i++
}



// программа запрашивает число, если меньше 100, цикл повторяется. Если cancel - отмена.
while (true) {
	var diginput = prompt ('Type the digit');
	if (diginput == null) {
		break;
	}
	else if (diginput <= 100) {
		alert ('wrong');
	}
	else break;
}
// еще вариант

var num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num != null);

*/
/*
var i = prompt ('Type digit');
if (+i>1&&+i<10) {
	alert (i);
}
else {
	alert ('Error');
}

var i = prompt ('Type digit');
while (+i>1&&+i<10&&) {
	alert (i);
	break;
}
 // какая-то хуита. Не понимаю. Венуться позже.

//проверка браузера через if ... else
var browser = prompt ('Name of your browser?');

if (browser == 'IE') {
	alert ('piece of shit');
}
else if (browser == 'Opera'
	|| browser == 'Firefox'
	|| browser == 'Safari'
	|| browser == 'Chrome') {
	alert ('good');
}
else {
	alert ('hmmm');
}

// пример

var a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

// то же самое, только с использованием switch ... case

var a = +prompt('a?', '');

switch (a) {
	case 0:
	alert ('0');
	break;

	case 1:
	alert ('1');
	break;
	case 2:
	case 3:
	alert ('2,3');
}

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

// функция возвращает меньшее значение
function min(a,b){
	if (a>b) {
		return b;
	}
	else {
		return a;
	}
}
*/

// функция возведения в степень

var dig = +prompt ('Введите число');
var step = +prompt ('Введите степень');
var result = 1;

function pow() {
	result = dig*result;
	return result;
}

while (dig>=1 && step>=1) { // числа должны быть больше 1
pow ();
step--;
}
alert (result);
