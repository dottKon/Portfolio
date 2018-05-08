var symbolChosen;
var sig = symbolChosen;
var oh = 'O';
var ex = 'X';


//score for each side
var winsOh = 0;
var winsEx = 0;


//move detector
var moves = 0;

//turn detector

var playerTurn = true;

var fields = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//cloning clear bord so we can use it once the game is finished
var divClone;

$(document).ready(function(){
	divClone = $("#board").clone();
	updateScore();
});


//function which tracks the wins and loses of each side
function updateScore(){
	document.getElementById('winsEx').innerHTML = winsEx;
	document.getElementById('winsOh').innerHTML = winsOh;
}

function topleft(s){
	if(document.getElementById('tl').innerHTML == '' && playerTurn == true){
		document.getElementById('tl').innerHTML = sig;
		playerTurn = false;
		moves++;

		deleteField(0);
		changeFlag();
		draw();
		winFun();
		computerMove();

	}
}

function topcenter(s){
	if(document.getElementById('tc').innerHTML == '' && playerTurn == true){
		document.getElementById('tc').innerHTML = sig;
		moves++;
		playerTurn = false;

		deleteField(1);
		changeFlag();
		draw();
		winFun();
		computerMove();
	}
}

function topright(s){
	if(document.getElementById('tr').innerHTML == '' && playerTurn == true){
		document.getElementById('tr').innerHTML = sig;
		moves++;		
		playerTurn = false;
		deleteField(2);
		changeFlag();
		draw();
		winFun();
		computerMove();
	}
}

function middleleft(s){
	if(document.getElementById('ml').innerHTML == '' && playerTurn == true){
		document.getElementById('ml').innerHTML = sig;
		moves++;		
		playerTurn = false;
		deleteField(3);
		changeFlag();
		draw();


		winFun();
		computerMove();
	}
}

function middlecenter(s){
	if(document.getElementById('mc').innerHTML == '' && playerTurn == true){
		document.getElementById('mc').innerHTML = sig;
		moves++;		
		playerTurn = false;
		deleteField(4);
		changeFlag();
		draw();

		winFun();
		computerMove();
	}
}

function middleright(s){
	if(document.getElementById('mr').innerHTML == '' && playerTurn == true){
		document.getElementById('mr').innerHTML = sig;
		moves++;		
		playerTurn = false;
		deleteField(5);
		changeFlag();
		draw();

		winFun();
		computerMove();
	}
}

function bottomleft(s){
	if(document.getElementById('bl').innerHTML == '' && playerTurn == true){
		document.getElementById('bl').innerHTML = sig;
		moves++;		
		playerTurn = false;
		deleteField(6);
		changeFlag();
		draw();
		winFun();
		computerMove();
	}
}

function bottomcenter(s){
	if(document.getElementById('bc').innerHTML == '' && playerTurn == true){
		document.getElementById('bc').innerHTML = sig;
		moves++;
		playerTurn = false;
		deleteField(7);
		changeFlag();
		draw();
		winFun();
		computerMove();
	}
}

function bottomright(s){
	if(document.getElementById('br').innerHTML == '' && playerTurn == true){
		document.getElementById('br').innerHTML = sig;
		moves++; 
		playerTurn = false;

		deleteField(8);
		changeFlag();
		draw();
		winFun();
		computerMove();

	}

}


function deleteField(j){
	for (var i=fields.length-1; i>=0; i--) {
	    if (fields[i] === j) {
	        fields.splice(i, 1);
	    }
	}

}

//function Change flag works only in 2 player mode

function changeFlag(){
	if(sig==oh){
		sig=ex;
	}else if(sig==ex){
		sig=oh;
	}

}

//start with the AI movement, first of all it will chose random fieldnumber

var randomNum;

function computerMove(){
	var delaySec = 1000;

	setTimeout(function(){

	randomNum = fields[Math.floor(Math.random() * fields.length)];
	console.log(randomNum);
	if(randomNum == 0){
		document.getElementById('tl').innerHTML = sig;
		moves++; 
		deleteField(0);
		draw();
		winFun();
		changeFlag();
	} else if(randomNum == 1){
		document.getElementById('tc').innerHTML = sig;
		moves++; 
		deleteField(1);	
		draw();
		winFun();
		changeFlag();
	}else if(randomNum == 2){
		document.getElementById('tr').innerHTML = sig;
		moves++; 
		deleteField(2);	
		draw();
		winFun();
		changeFlag();
	}else if(randomNum == 3){
		document.getElementById('ml').innerHTML = sig;
		moves++; 
		deleteField(3);	
		draw();
		winFun();
		changeFlag();
	}else if(randomNum == 4){
		document.getElementById('mc').innerHTML = sig;
		moves++; 
		deleteField(4);	
		draw();
		winFun();
		changeFlag();
	}else if(randomNum == 5){
		document.getElementById('mr').innerHTML = sig;
		moves++; 
		deleteField(5);	
		draw();
		winFun();
		changeFlag();
	}else if(randomNum == 6){
		document.getElementById('bl').innerHTML = sig;
		moves++; 
		deleteField(6);	
		draw();
		winFun();
		changeFlag();
	}else if(randomNum == 7){
		document.getElementById('bc').innerHTML = sig;
		moves++; 
		deleteField(7);	
		draw();
		winFun();
		changeFlag();
	}else if(randomNum == 8){
		document.getElementById('br').innerHTML = sig;
		moves++; 
		deleteField(8);	
		draw();
		winFun();
		changeFlag();
	}

	playerTurn = true;


	}, delaySec);

}

//Winning function: a function to verify wheather either of the signs is three in a row. There are 8 possible winning positions so function needs to verify after each move if this is the winning condition.

function winFun(){
	//check EXes
	if(document.getElementById('tl').innerHTML==ex &&
		document.getElementById('tc').innerHTML==ex &&
		document.getElementById('tr').innerHTML==ex){
		
		winsEx++;
		restart();
	}
	if(document.getElementById('tl').innerHTML==ex &&
		document.getElementById('ml').innerHTML==ex &&
		document.getElementById('bl').innerHTML==ex){
		
		winsEx++;
		restart();
	}
	if(document.getElementById('tl').innerHTML==ex &&
		document.getElementById('mc').innerHTML==ex &&
		document.getElementById('br').innerHTML==ex){
		
		winsEx++;
		restart();
	}
	if(document.getElementById('bl').innerHTML==ex &&
		document.getElementById('bc').innerHTML==ex &&
		document.getElementById('br').innerHTML==ex){
		
		winsEx++;
		restart();
	}
	if(document.getElementById('tr').innerHTML==ex &&
		document.getElementById('mr').innerHTML==ex &&
		document.getElementById('br').innerHTML==ex){
		
		winsEx++;
		restart();

	}
	if(document.getElementById('tr').innerHTML==ex &&
		document.getElementById('mc').innerHTML==ex &&
		document.getElementById('bl').innerHTML==ex){
		
		winsEx++;
		restart();
	}
	if(document.getElementById('ml').innerHTML==ex &&
		document.getElementById('mc').innerHTML==ex &&
		document.getElementById('mr').innerHTML==ex){
		
		winsEx++;
		restart();
	}
	if(document.getElementById('tc').innerHTML==ex &&
		document.getElementById('mc').innerHTML==ex &&
		document.getElementById('bc').innerHTML==ex){
		
		winsEx++;
		restart();
	}


	//check oh
	if(document.getElementById('tl').innerHTML==oh &&
		document.getElementById('tc').innerHTML==oh &&
		document.getElementById('tr').innerHTML==oh){
		

		winsOh++;
		restart();
	}
	if(document.getElementById('tl').innerHTML==oh &&
		document.getElementById('ml').innerHTML==oh &&
		document.getElementById('bl').innerHTML==oh){
			
		
		winsOh++;
		restart();
	}
	if(document.getElementById('tl').innerHTML==oh &&
		document.getElementById('mc').innerHTML==oh &&
		document.getElementById('br').innerHTML==oh){
		
		
		winsOh++;
		restart();
	}
	if(document.getElementById('bl').innerHTML==oh&&
		document.getElementById('bc').innerHTML==oh &&
		document.getElementById('br').innerHTML==oh){
		
		
		winsOh++;
		restart();
	}
	if(document.getElementById('tr').innerHTML==oh&&
		document.getElementById('mr').innerHTML==oh &&
		document.getElementById('br').innerHTML==oh){
		
		winsOh++;
		restart();
	}
	if(document.getElementById('tr').innerHTML==oh&&
		document.getElementById('mc').innerHTML==oh &&
		document.getElementById('bl').innerHTML==oh){
		
		
		winsOh++;
		restart();
	}
	if(document.getElementById('ml').innerHTML==oh&&
		document.getElementById('mc').innerHTML==oh &&
		document.getElementById('mr').innerHTML==oh){
		
		
		winsOh++;
		restart();
	}
	if(document.getElementById('tc').innerHTML==oh&&
		document.getElementById('mc').innerHTML==oh &&
		document.getElementById('bc').innerHTML==oh){
		
		
		winsOh++;
		restart();
	}


};

//Draw function will be casted when there are 9 moves and winning function has not returned true


//restart function resets the board
function restart(){
	updateScore();
	$("#board").replaceWith(divClone.clone());
	updateScore();
	moves = 0;
	fields = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	if(playerTurn == true){
		playerTurn = false;
	} else {
		playerTurn = true;
	}
};

//when moves are empty (or full) and noone has won
function draw(){
	if(moves == 9){
		restart();
	}
}


//choosing the symbols
function gameCross(){
	document.getElementById('menu').style.height = "0%";
	symbolChosen = 'X';
	compSymbol = 'O';
	sig = symbolChosen;
}

function gameCircle(){
	document.getElementById('menu').style.height = "0%";
	symbolChosen = 'O';
	compSymbol = 'X';
	sig = symbolChosen;
}