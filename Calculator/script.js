var res = '';
var result;


function czysto(){
	document.getElementById('result').innerHTML = '';
	res = '';
}

function zero() {
	document.getElementById('result').innerHTML += 0;
	res += '0'
}

function one() {
	document.getElementById('result').innerHTML += 1;
	res += '1';
}

function two() {
	document.getElementById('result').innerHTML += 2;
	res += '2';
}

function three() {
	document.getElementById('result').innerHTML += 3;
	res += '3';
	console.log(res);
}

function four() {
	document.getElementById('result').innerHTML += 4;
	res += '4';
}

function five() {
	document.getElementById('result').innerHTML += 5;
	res += '5';
}

function six() {
	document.getElementById('result').innerHTML += 6;
	res += '6';
}

function seven() {
	document.getElementById('result').innerHTML += 7;
	res += '7';
}

function eight() {
	document.getElementById('result').innerHTML += 8;
	res += '8';
}

function nine() {
	document.getElementById('result').innerHTML += 9;
	res += '9';

}

function coma() {
	if(res.slice(-1) !== '+' && res.slice(-1) !== '-' && res.slice(-1) !== '/' && res.slice(-1) !== '*' && res.slice(-1) !== '.' && res.slice(-1) !== ''){

		document.getElementById('result').innerHTML += '.';
		res += '.';
	}
}

// OPERATIONS

function minus() {
	if(res.slice(-1) !== '+' && res.slice(-1) !== '-' && res.slice(-1) !== '/' && res.slice(-1) !== '*' && res.slice(-1) !== '.' && res.slice(-1) !== ''){

		document.getElementById('result').innerHTML += '-';
		res += '-';
	}
}

function plus() {
	if(res.slice(-1) !== '+' && res.slice(-1) !== '-' && res.slice(-1) !== '/' && res.slice(-1) !== '*' && res.slice(-1) !== '.' && res.slice(-1) !== ''){
		document.getElementById('result').innerHTML += '+';
		res += '+';
	}
	
}

function multiply() {
	if(res.slice(-1) !== '+' && res.slice(-1) !== '-' && res.slice(-1) !== '/' && res.slice(-1) !== '*' && res.slice(-1) !== '.' && res.slice(-1) !== ''){
		document.getElementById('result').innerHTML += '*';
		res += '*';
	}
}

function divide() {
	if(res.slice(-1) !== '+' && res.slice(-1) !== '-' && res.slice(-1) !== '/' && res.slice(-1) !== '*' && res.slice(-1) !== '.' && res.slice(-1) !== ''){
		document.getElementById('result').innerHTML += '/';
		res += '/';
	}
}


function equals(){
	console.log(res);
	result = eval(res)
	res = result.toString();
	document.getElementById('result').innerHTML = result;
}
