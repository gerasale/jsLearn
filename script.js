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


*/
for (var dig = 0; dig < 10; dig++) {
	if ((dig - 1) % 2) continue;
	alert (dig);
}


