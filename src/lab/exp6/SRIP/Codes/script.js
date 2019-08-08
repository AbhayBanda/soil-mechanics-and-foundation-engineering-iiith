
$(document).ready(function() {
	$("#VHT").click(function() {
		$("#mycanvas2").hide();
		$("#mycanvas").show();
	});
});
$(document).ready(function() {
	$("#CHT").click(function() {
		$("#mycanvas").hide();
		$("#mycanvas2").show();
	});
});




var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 800;
canvas.style.border = "10px solid blue";
ctx.font = "20px bold";
ctx.fillStyle = "blue";
ctx.fillText("Variable head test",canvas.width/2 - 80 , 40);
function drawLine(initX, initY, width, height) {
ctx.lineWidth = 3;
ctx.strokeRect(initX, initY + 100, width, height);
ctx.strokeStyle = "black";
}

drawLine(325, 50, 25, 0);
drawLine(325, 50, 25, 0);
drawLine(325, 50, 0, 275);
drawLine(325, 325, -100, 0);
drawLine(225, 325, 0, 250);
drawLine(225, 575, 225, 0);
drawLine(450, 575, 0, -250);
drawLine(450, 325, -100, 0);
drawLine(350, 50, 0, 275);

drawLine(225, 500, -100, 0);
drawLine(125, 500,0, 75);
drawLine(125, 575, 100, 0);
drawLine(450, 500, 100, 0);
drawLine(550, 500 , 0 ,75);
drawLine(550, 575, -100, 0);
ctx1 = canvas.getContext("2d");
function fillColor(initX, initY, width, height, color) {
ctx1.beginPath();
ctx1.rect(initX, initY + 100, width, height);
ctx1.fillStyle = color;
ctx1.globalAlpha = 1;
ctx1.fill();
}
fillColor(326.5, 120, 22, 210, "#4679D5");
fillColor(226.5, 326.5, 222, 247,"#4679D5");
drawLine(225, 380, 225, 0);
drawLine(225, 530, 225, 0);
fillColor(226.5, 381.5, 222, 147, "#964625")
drawLine(225, 515, -100, 0);
drawLine(450, 515, 100, 0);
fillColor(126.5, 516.5, 96.5, 57, "#4679D5");
fillColor(451.5, 516.5, 96.5, 57, "#4679D5");

var ctx2 = canvas.getContext("2d");
function waterLine(initX, initY) {
ctx2.lineWidth = 1;

ctx2.strokeStyle = "#FFFFFF";
ctx2.strokeRect(initX, initY + 100, 3, 0);
}
var k = 0;
while(k<20) {
	for(var i = 327; i<347; i += 8) {
		for(var j = 123; j<330; j += 15 ) {
			waterLine(i, j);
		}
	}
	k++;
}

var l = 0;
while(l<20) {
	for(var i = 226.5; i<455; i += 10) {
		for(var j = 330; j<380; j += 15 ) {
			waterLine(i, j);
		}
	}
	l++;
}

var m = 0;
while(m<40) {
	for(var i = 226.5; i<455; i += 10) {
		for(var j = 534.5; j<575; j += 15 ) {
			waterLine(i, j);
		}
	}
	m++;
}
var n = 0;
while(n<40) {
	for(var i = 127 ; i<225; i += 15) {
		for(var j = 520 ; j<625; j += 15 ) {
			waterLine(i, j);
		}
	}
	n++;
}
var o = 0;
while(o<40) {
	for(var i = 452.5 ; i<547; i += 15) {
		for(var j = 520 ; j<625; j += 15 ) {
			waterLine(i, j);
		}
	}
	o++;
}


function waterDrops(x, y) {
				var ctx4 = canvas.getContext('2d');
		ctx4.beginPath();
        ctx4.fillStyle = "skyblue";
 
        ctx4.arc(x, y, 3, 0,  Math.PI);
        ctx4.closePath();
        ctx4.fill();
}

var yWater = 220;
var xWater = 326.25;
var y1 = 490;
var y = 1;
ctx3 = canvas.getContext("2d");
function animations()
{


	id=window.requestAnimationFrame(animations);
	if(yWater<320){
			ctx3.fillStyle = "white";
			ctx3.beginPath();
			ctx3.arc(xWater + 11.5, yWater-5, 9, 0, 2 * Math.PI);
			ctx3.stroke();
			ctx3.fillRect(xWater, yWater, 22.5, 1);
			waterDrops(240, y1 + 2);
			waterDrops(300, y1 + 2);
			waterDrops(360, y1 + 2);
			waterDrops(420, y1 + 2);
			ctx5 = canvas.getContext("2d");
			ctx5.fillStyle = "#964625";
			ctx.fillRect(230, 484, 218, y);
			y += 0.1;
			y1 += 0.1;
			yWater += 0.1;
	}





	else {
		ctx.fillRect(230, 484, 218, 140);
			cancelAnimationFrame(id);	// Ends the Animation
		}
}


var canvas2 = document.getElementById("mycanvas2");
var ctx6 = canvas2.getContext("2d");
canvas2.width = 700;
canvas2.height = 800;
canvas2.style.border = "10px solid blue";
ctx6.font = "20px bold";
ctx6.fillStyle = "blue";
ctx6.fillText("Constant head test",canvas2.width/2 - 80 , 40);

function drawLine2(initX, initY, width, height) {
ctx6.lineWidth = 3;
ctx6.strokeRect(initX + 35, initY + 75, width, height);
ctx6.strokeStyle = "black";
}

drawLine2(200, 50, 0, 100);
drawLine2(200, 150, 150, 0);
drawLine2(370, 150, 105, 0);
drawLine2(475, 150, 0, -25);
drawLine2(475, 125, -50, 0);
drawLine2(425, 125, 0, -75);
drawLine2(350, 55, 0, 150);
drawLine2(350, 205, 75, 0);
drawLine2(425, 205, 0, -20);
drawLine2(425, 185, -55, 0);
drawLine2(370, 185, 0, -130);
drawLine2(275, 150, 0, 200);
drawLine2(300, 150, 0, 200);
drawLine2(275, 350, -75, 0);
drawLine2(300, 350, 75, 0);
drawLine2(200, 350, 0, 300);
drawLine2(375, 350, 0, 300);
drawLine2(200, 650, 175, 0);
drawLine2(200, 550, -100, 0);
drawLine2(375, 550, 100, 0);
drawLine2(100, 550, 0, 100);
drawLine2(475, 550, 0, 100);
drawLine2(100, 650, 100, 0);
drawLine2(475, 650, -100, 0);
drawLine2(200, 570, -100, 0);
drawLine2(375,570, 100, 0);
drawLine2(200, 400, 175, 0);//sandupper
drawLine2(200, 600, 175, 0);//sandlower
drawLine2(500, 600, 50, 100);//box
drawLine2(340 , 350, 0, -35);
drawLine2(350 , 350, 0, -25);
drawLine2(340, 315, 40, 0);
drawLine2(350, 325, 30, 0);
drawLine2(370, 310, 0, 20);
drawLine2(380, 315, 0, 10);

ctx7 = canvas2.getContext("2d");
function fillColor2(initX, initY, width, height, color) {
ctx7.beginPath();
ctx7.rect(initX + 37 , initY + 76, width, height - 2);
ctx7.fillStyle = color;
ctx7.globalAlpha = 1;
ctx7.fill();
}
fillColor2(200, 400,172, 200, "#964625");
fillColor2(200, 80, 146, 70, "#1388FD");
fillColor2(200, 80, 146, 70, "#1388FD");
fillColor2(370, 80, 52, 70,"#1388FD");
fillColor2(422, 125, 50, 25, "#1388FD");
fillColor2(275, 150, 22, 204, "#1388FD");
fillColor2(200, 350, 172, 50, "#1388FD");
fillColor2(200, 600, 172, 50, "#1388FD");
fillColor2(99, 570, 97, 80, "#1388FD");
fillColor2(375, 570, 97, 80, "#1388FD");
fillColor2(500, 625, 47,75);

