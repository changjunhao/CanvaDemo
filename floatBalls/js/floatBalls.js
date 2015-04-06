// JavaScript Document
var balls=[];
window.onload=function(){
	var convas=document.getElementById('canvas');
	canvas.width=document.body.clientWidth;
	canvas.height=document.body.clientHeight;
	var context=convas.getContext('2d');
	for(var i=0;i<100;i++){
		var R=Math.floor(Math.random()*255);
		var G=Math.floor(Math.random()*255);
		var B=Math.floor(Math.random()*255);
		var radius=Math.random()*50+20;//100;
		context.globalAlpha=0.7;
		context.globalCompositeOperation="xor";
		aBall={
			color:"rgb("+R+","+G+","+B+")",
			radius:radius,
			x:Math.random()*(canvas.width-2*radius)+radius,
			y:Math.random()*(canvas.height-2*radius)+radius,
			vx:(Math.random()*5+5)*Math.pow(-1,Math.floor(Math.random()*100)),
			vy:(Math.random()*5+5)*Math.pow(-1,Math.floor(Math.random()*100))
		}
		balls[i]=aBall;
	}
	setInterval(
        function(){
            draw( context );
            update(canvas.width,convas.height);
        },
        50
    );
}
function draw(cxt){
	var canvas=cxt.canvas;
	cxt.clearRect(0,0,canvas.width,canvas.height);
	for(var i=0;i<balls.length;i++){
		cxt.fillStyle=balls[i].color;
		cxt.beginPath();
		cxt.arc(balls[i].x,balls[i].y,balls[i].radius,0,Math.PI*2);
		cxt.closePath();
		cxt.fill();
	}
}
function update(canvasWidth,canvasHeight){
	for( var i = 0 ; i < balls.length ; i ++ ){
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        if( balls[i].x - balls[i].radius<=0 ){
            balls[i].x = balls[i].radius;
            balls[i].vx = -balls[i].vx;
        }
		if( balls[i].x + balls[i].radius>=canvasWidth){
            balls[i].x = canvasWidth-balls[i].radius;
            balls[i].vx = - balls[i].vx;
        }
		if( balls[i].y - balls[i].radius<=0 ){
            balls[i].y = balls[i].radius;
            balls[i].vy = -balls[i].vy;
        }
		if( balls[i].y + balls[i].radius>=canvasHeight){
            balls[i].y = canvasHeight-balls[i].radius;
            balls[i].vy = - balls[i].vy;
        }
    }
}