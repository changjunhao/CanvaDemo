// JavaScript Document
var balls=[];
var convas=document.getElementById('canvas');
var context=convas.getContext('2d');
window.onload=function(){
	canvas.width=800;
	canvas.height=600;
	for(var i=0;i<10;i++){
		var aBall={x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*50+20};
		balls[i]=aBall;
	}
	draw();
	//canvas.addEventListener("mousemove",detect);
	canvas.addEventListener("mouseup",detect);
}
function draw(){
	for(var i=0;i<balls.length;i++){
		context.beginPath();
		context.arc(balls[i].x,balls[i].y,balls[i].r,0,Math.PI*2);
		//context.closePath();
		context.fillStyle="#058";
		context.fill();
	}
}
function detect(event){
	var x=event.clientX-canvas.getBoundingClientRect().left;
	var y=event.clientY-canvas.getBoundingClientRect().top;
	for(var i=0;i<balls.length;i++){
		context.beginPath();
		context.arc(balls[i].x,balls[i].y,balls[i].r,0,Math.PI*2);
		if(context.isPointInPath(x,y)){
			context.fillStyle="red";
			context.fill();
		}
	}
}