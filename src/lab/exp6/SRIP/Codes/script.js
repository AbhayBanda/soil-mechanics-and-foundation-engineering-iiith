
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 700;
canvas.style.border = "10px solid blue";
ctx.font = "20px bold";
ctx.fillStyle = "blue";
ctx.fillText("Variable head test",canvas.width/2 - 80 , 40);
ctx.fillText("Time T1", 180, 215 - 75);
ctx.fillText("Time T2", 200, 315 - 75);
ctx.fillText("h1", 140, 450 - 75);
ctx.fillText("h2", 180, 450 - 75);
ctx.fillText("h", 500, 500 - 75);
ctx.fillText("Stand Pipe", 375, 350 - 75);
ctx.fillText("dh", 400, 270 - 75);


function drawLine(initX, initY, Width, Height) {
ctx.lineWidth = 3;
ctx.strokeRect(initX, initY + 25, Width, Height);
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
function fillColor(initX, initY, Width, Height, color) {
ctx1.beginPath();
ctx1.rect(initX, initY + 25, Width, Height);
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
var canvas3 = document.getElementById("mycanvas");
var context = canvas3.getContext("2d");
function indicationLines(initX, initY, finalX, finalY) {

  context.beginPath(); 

  context.moveTo(initX,initY - 75);

  context.lineTo(finalX,finalY - 75);
  context.strokeStyle = "black";
  context.stroke();

}

	indicationLines(140, 220, 325, 220);
	indicationLines(160, 220, 160, 600);
	indicationLines(195, 320, 325, 320)
	indicationLines(200, 320, 200, 600);
	indicationLines(360, 252, 400, 252);
	indicationLines(360, 275, 500, 275);
	indicationLines(400, 355, 360, 390);
	indicationLines(490, 275, 490, 600);
	indicationLines(380, 250, 380, 220);
	indicationLines(380, 275, 380, 305);

function triangle(x1, y1, x2, y2, x3, y3)
 {
    var context2 = canvas.getContext('2d');

    context2.beginPath();
    context2.moveTo(x1,y1-75);
    context2.lineTo(x2,y2-75);
    context2.lineTo(x3,y3-75);
    context2.fillStyle = "black";
    context2.fill();
  }

  triangle(160, 220, 155, 230, 165, 230);
  triangle(160, 600, 155, 590, 165, 590);
  triangle(200, 320, 195, 330, 205, 330);
  triangle(200, 600, 195, 590, 205, 590);
  triangle(359, 391, 362, 380, 370, 390);
  triangle(380, 252, 375, 240, 385, 240);
  triangle(380, 275, 375, 285, 385, 285);
  triangle(490, 275, 485, 285, 495, 285);
  triangle(490, 600, 485, 590, 495, 590);
var ctx2 = canvas.getContext("2d");
function waterLine(initX, initY) {
ctx2.lineWidth = 1;

ctx2.strokeStyle = "#FFFFFF";
ctx2.strokeRect(initX, initY + 100, 3, 0);
}
var k = 0;
while(k<20) {
	for(var i = 327; i<347; i += 8) {
		for(var j = 123-75; j<330-75; j += 15 ) {
			waterLine(i, j);
		}
	}
	k++;
}

var l = 0;
while(l<20) {
	for(var i = 226.5; i<455; i += 10) {
		for(var j = 330-75; j<380-75; j += 15 ) {
			waterLine(i, j);
		}
	}
	l++;
}

var m = 0;
while(m<40) {
	for(var i = 226.5; i<455; i += 10) {
		for(var j = 534.5-75; j<575-75; j += 15 ) {
			waterLine(i, j);
		}
	}
	m++;
}
var n = 0;
while(n<40) {
	for(var i = 127 ; i<225; i += 15) {
		for(var j = 520-75 ; j<625-75; j += 15 ) {
			waterLine(i, j);
		}
	}
	n++;
}
var o = 0;
while(o<40) {
	for(var i = 452.5 ; i<547; i += 15) {
		for(var j = 520-75 ; j<625-75; j += 15 ) {
			waterLine(i, j);
		}
	}
	o++;
}
var canvas5 = document.getElementById("mycanvas");
var ctx11 = canvas5.getContext("2d");

var dots1=[];
var numDots1 = 500;
var width1 = 220;
var height1 = 127;

for(var i=0 ; i<numDots1 ; i++){
  dots1.push({
    x1 : Math.random() * width1,
    y1 : Math.random() * height1,
  })
}

function draw2() {
    ctx11.clearRect(0, 0, width1, height1);
    var j, dot1;
    for(j = 0; j < numDots1; j++) {
        dot1 = dots1[j];
        ctx11.beginPath();
        ctx11.arc(dot1.x1 + 230, dot1.y1 + 412, 1, 0, Math.PI * 2, false);
        ctx11.fillStyle = "#442011";
        ctx11.fill();
    }
}
setInterval(function() {
    draw2();
}, 1000/24);


function waterDrops(x, y) {
				var ctx4 = canvas.getContext('2d');
		ctx4.beginPath();
        ctx4.fillStyle = "skyblue";
        ctx4.arc(x, y - 75, 3, 0,  Math.PI);
        ctx4.closePath();
        ctx4.fill();
}
function drop(x, y, color) {

    ctx.restore();


    ctx.fillStyle = color;
    ctx.moveTo(x - 3, y);
    ctx.lineTo(x, y - 5);
    ctx.lineTo(x + 3, y);
    ctx.arc(x, y, 3, 0, Math.PI);

    ctx.closePath();

    ctx.fill();

   

}			/*drop(240, 420);
			drop(300, 420);
			drop(360, 420);
			drop(420, 420);*/


var yWater = 220-75;
var xWater = 326.25;
var y1 = 490;
var y = 1;
ctx3 = canvas.getContext("2d");
function animations()
{

	$("#variableButton").attr("disabled", true);
	id=window.requestAnimationFrame(animations);
	if(yWater<320-75){
			ctx3.fillStyle = "white";


			ctx3.fillRect(xWater, yWater, 22.5, 1);



			i = 0;

			drop(240, 418 + y, "skyblue");
			drop(300, 418 + y);
			drop(360, 418 + y);
			drop(420, 418 + y);
			i++;

			ctx.fillStyle = "#964625";
			ctx.fillRect(235, 416, 10, y+0.3);
			ctx.fillRect(295, 416, 10, y+0.3);
			ctx.fillRect(355, 416, 10, y+0.3);
			ctx.fillRect(415, 416, 10, y+0.3);


			y += 0.4;
			y1 += 2
			yWater += 0.5;

			drop(240, 420 + y ,"skyblue");
			drop(300, 420 + y);
			drop(360, 420 + y);
			drop(420, 420 + y);



	}





	else {
		$("#variableButton").attr("disabled", false);
			ctx.fillStyle = "#964625";
			ctx.fillRect(235, 430, 10, y+0.3);
			ctx.fillRect(295, 430, 10, y+0.3);
			ctx.fillRect(355, 430, 10, y+0.3);
			ctx.fillRect(415, 430, 10, y+0.3);
			cancelAnimationFrame(id);	// Ends the Animation
		}
}


var canvas2 = document.getElementById("mycanvas2");
var ctx6 = canvas2.getContext("2d");
canvas2.width = 700;
canvas2.height = 700;
canvas2.style.border = "10px solid blue";
ctx6.font = "20px bold";
ctx6.fillStyle = "blue";
ctx6.fillText("Constant head test",canvas2.width/2 - 80 , 40);
ctx6.fillText("Over head tank", 450, 70);
ctx6.fillText("Supply", 480, 135);
ctx6.fillText("Over flow", 470, 225);
ctx6.fillText("Air valve", 425, 350);
ctx6.fillText("Bottom tank", 150, 695);
ctx6.fillText("Measuring jar", 520, 695);
ctx6.fillText("h", 135, 350);
ctx6.fillText("L", 190, 525);

function drawLine2(initX, initY, Width, Height) {
ctx6.lineWidth = 3;
ctx6.strokeRect(initX + 35, initY + 25, Width, Height);
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
drawLine2(500, 575, 50, 75);//box
drawLine2(340 , 350, 0, -35);
drawLine2(350 , 350, 0, -25);
drawLine2(340, 315, 40, 0);
drawLine2(350, 325, 30, 0);
drawLine2(370, 310, 0, 20);
drawLine2(380, 315, 0, 10);



ctx7 = canvas2.getContext("2d");
function fillColor2(initX, initY, Width, Height, color) {
ctx7.beginPath();
ctx7.rect(initX + 37 , initY + 26, Width, Height - 2);
ctx7.fillStyle = color;
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
fillColor2(500, 600, 47,50,"#1388FD");



var context3 = canvas2.getContext("2d");
function indicationLines2(initX, initY, finalX, finalY) {

  context3.beginPath(); 
  context3.moveTo(initX,initY);
  context3.lineTo(finalX,finalY);
  context3.strokeStyle = "black";
  context3.stroke();
}

indicationLines2(140, 100, 180, 100);
indicationLines2(162, 100, 162, 595 )
indicationLines2(150, 595, 175, 595);
indicationLines2(200, 425, 225, 425);
indicationLines2(212,425, 212, 625);
indicationLines2(200, 625, 225, 625);
indicationLines2(540, 165, 590, 165);





function triangle2(x1, y1, x2, y2, x3, y3)
 {
    var context4 = canvas2.getContext('2d');

    context4.beginPath();
    context4.moveTo(x1,y1);
    context4.lineTo(x2,y2);
    context4.lineTo(x3,y3);
    context4.fillStyle = "black";
    context4.fill();
  }

  triangle2(162, 100, 157, 110, 167, 110);
  triangle2(162, 595, 157, 585, 167, 585);
  triangle2(212, 425, 207, 435, 217, 435);
  triangle2(212, 625, 207, 615, 217, 615);
  triangle2(525, 165, 540, 160, 540, 170);


var ctx9 = canvas2.getContext("2d");
function waterLines(x1, y1, x2, y2 ) {
	ctx9.strokeStyle = "white";
ctx9.lineWidth = 1;
ctx9.lineHeight = 0;
ctx9.moveTo(x1, y1);
ctx9.lineTo(x2, y2);
ctx9.stroke();
}

for(var i = 240; i<390; i += 10){
	for(var j = 110; j<175; j = j + 15) {
		waterLines(i, j, i+4, j);
	}
}
for(var i = 410; i<460; i += 10){
	for(var j = 110; j<175; j = j + 15) {
		waterLines(i, j, i+4, j);
	}
}
for(var i = 460; i<510; i += 10){
	for(var j = 140; j<175; j = j + 15) {
		waterLines(i, j, i+4, j);
	}
}
for(var i = 312; i<330; i += 8){
	for(var j = 180; j<380; j = j + 15) {
		waterLines(i, j, i+4, j);
	}
}
for(var i = 240; i<405; i += 8){
	for(var j = 380; j<430; j = j + 10) {
		waterLines(i, j, i+4, j);
	}
}

for(var i = 240; i<405; i += 8){
	for(var j = 630; j<680; j = j + 10) {
		waterLines(i, j, i+4, j);
	}
}

for(var i = 240; i<405; i += 8){
	for(var j = 630; j<680; j = j + 10) {
		waterLines(i, j, i+4, j);
	}
}

for(var i = 140; i<230; i += 8){
	for(var j = 600; j<680; j = j + 10) {
		waterLines(i, j, i+4, j);
	}
}
for(var i = 415; i<510; i += 8){
	for(var j = 600; j<680; j = j + 10) {
		waterLines(i, j, i+4, j);
	}
}
for(var i = 537; i<585; i += 8){
	for(var j = 610; j<680; j = j + 10) {
		waterLines(i, j, i+4, j);
	}
}

var canvas4 = document.getElementById("mycanvas2");
var ctx10 = canvas4.getContext("2d");

var dots=[];
var numDots = 500;
var width2 = 170;
var height2 = 90;
//var bounce = -1;
for(var i=0 ; i<numDots ; i++){
  dots.push({
    x : Math.random() * width2,
    y : Math.random() * height2,
  })
}

function draw() {
    ctx10.clearRect(0, 0, width2, height2);
    var j, dot;
    for(j = 0; j < numDots; j++) {
        dot = dots[j];
        ctx10.beginPath();
        ctx10.arc(dot.x + 240, dot.y + 425, 0.5, 0, Math.PI * 2, false);
        ctx10.fillStyle = "#442011";
        ctx10.fill();
        
    }
}
ctx10.stroke();

setInterval(function() {
    draw();
}, 1000/24);
var canvas6 = document.getElementById("mycanvas2");
var ctx12 = canvas4.getContext("2d");

var dots=[];
var numDots = 500;
var width2 = 170;
var height2 = 90;
//var bounce = -1;
for(var i=0 ; i<numDots ; i++){
  dots.push({
    x : Math.random() * width2,
    y : Math.random() * height2,
  })
}

function draw3() {
    ctx12.clearRect(0, 0, width2, height2);
    var j, dot;
    for(j = 0; j < numDots; j++) {
        dot = dots[j];
        ctx12.beginPath();
        ctx12.arc(dot.x + 240, dot.y + 520, 0.5, 0, Math.PI * 2, false);
        ctx12.fillStyle = "#442011";
        ctx12.fill();
    }
}
ctx12.stroke();

setInterval(function() {
    draw3();
}, 1000/24);

//fillColor2(500, 600, 47,50,"#1388FD");

ctx14 = canvas2.getContext("2d");
function drop2(x, y, color) {

    ctx14.restore();


    ctx14.fillStyle = color;
    ctx14.moveTo(x - 3, y);
    ctx14.lineTo(x, y - 5);
    ctx14.lineTo(x + 3, y);
    ctx14.arc(x, y, 3, 0, Math.PI);

    ctx14.closePath();

    ctx14.fill();

   

}	


var constantXWater = 237;
var constantYWater = 105;

var constantXWater2 = 536;
var constantYWater2 = 630;
var yBoxWater = 405;
//drawLine2(200, 400, 175, 0);//sandupper
//drawLine2(200, 600, 175, 0);//sandlower
var ctx13 = canvas2.getContext("2d");
var ctx14 = canvas2.getContext("2d"); 
var y3 = 1;
function animations2()
{
$("#constantButton").attr("disabled", true);

	id2=window.requestAnimationFrame(animations2);

	if(constantYWater<145){

			ctx13.fillStyle = "white";
			ctx13.fillRect(constantXWater, constantYWater, 146, 1);
			ctx13.fillRect(constantXWater + 170, constantYWater, 51, 1);
			constantYWater += 0.1;




			drop2(245, 435 + y3, "skyblue");
			drop2(285, 435 + y3);
			drop2(365-20, 435 + y3);
			drop2(425-20, 435 + y3);

			ctx13.fillStyle = "#964625";
			ctx13.fillRect(240, 435, 10, y3+0.3);
			ctx13.fillRect(300-20, 435, 10, y3+0.3);
			ctx13.fillRect(360-20, 435, 10, y3+0.3);
			ctx13.fillRect(420-20, 435, 10, y3+0.3);


			y3 += 0.4;
			drop2(245, 435 + y3 ,"skyblue");
			drop2(305-20, 435 + y3);
			drop2(365-20, 435 + y3);
			drop2(425-20, 435 + y3);

	}
	else if (constantYWater>=145 && constantYWater2>610){
			ctx13.fillStyle = "#964625";
			ctx13.fillRect(240, 589, 10, 11);
			ctx13.fillRect(300-20, 589, 10, 11);
			ctx13.fillRect(340, 589, 10, 11);
			ctx13.fillRect(400, 589, 10, 11);
		for(var i = 537; i<585; i += 8){
	for(var j = 610; j<680; j = j + 10) {
		waterLines(i, j, i+4, j);
	}
}
		ctx13.fillStyle = "#1388FD";
		ctx13.fillRect(constantXWater2, constantYWater2, 47, -1);
		constantYWater2 -= 0.1
	}


if(constantYWater>=145 && constantYWater2<=610 )
{
	$("#constantButton").attr("disabled", false);
	cancelAnimationFrame(id2);
}
}



$(document).ready(function() {
	$("#VHT").click(function() {
		$("#mycanvas2").hide();
		$("#mycanvas").show();
		$("#variableButton").show();
		$("#constantButton").hide();
	});
});
$(document).ready(function() {
	$("#CHT").click(function() {
		document.getElementById("center").style.height = "650px";
		$("#mycanvas").hide();
		$("#mycanvas2").show();
		$("#variableButton").hide();
		$("#constantButton").show();
	});
});
