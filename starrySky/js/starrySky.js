// JavaScript Document
window.onload=function(){
	var convas=document.getElementById('canvas');
	canvas.width=document.body.clientWidth;
	canvas.height=document.body.clientHeight;
	var context=convas.getContext('2d');
	var skyStyle=context.createLinearGradient(0,0,0,canvas.height);
	skyStyle.addColorStop(0.0,"black");
	skyStyle.addColorStop(1.0,"#035");
	context.fillStyle=skyStyle;
	context.fillRect(0,0,convas.width,convas.height);
	for(var i=0;i<200;i++){
		var r=Math.random()*5+5;
		var x=Math.random()*canvas.width;
		var y=Math.random()*canvas.height*0.65;
		var a=Math.random()*360;
		drawStar(context,x,y,r,a);	
	}
	fillMoon(context,canvas.width*3/4,150,80,30);
	drawLand(context);
}
function drawStar(cxt,x,y,r,rot){
	cxt.save();
	cxt.translate(x,y);
	cxt.rotate(rot/180*Math.PI);
	cxt.scale(r,r)
	starPath(cxt);
	cxt.fillStyle="#fb3";
	//cxt.strokeStyle="#fd5";
	//cxt.lineWidth=3;
	//cxt.lineJoin="round";
	cxt.fill();
	//cxt.stroke();
	cxt.restore();
}
function starPath(cxt){
	cxt.beginPath();
	for(var i=0;i<5;i++){
		cxt.lineTo(Math.cos((18+i*72)/180*Math.PI),
			-Math.sin((18+i*72)/180*Math.PI));
		cxt.lineTo(Math.cos((54+i*72)/180*Math.PI)*0.5,
			-Math.sin((54+i*72)/180*Math.PI)*0.5);
	}
	cxt.closePath();
}
function fillMoon(cxt,x,y,R,rot,/*optional*/fillColor){
	cxt.save();
	cxt.translate(x,y);
	cxt.rotate(rot*Math.PI/180);
	cxt.scale(R,R);
	pathMoon(cxt);
	cxt.fillStyle=fillColor||"#fb5";
	cxt.fill();
	cxt.restore();
}
function pathMoon(cxt){
	cxt.beginPath();
	cxt.arc(0,0,1,0.5*Math.PI,1.5*Math.PI,true);
	cxt.moveTo(0,-1);
	cxt.quadraticCurveTo(1.2,0,0,1);
	cxt.closePath();
}
function dis(x1,y1,x2,y2){
	return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}
function drawLand(cxt){
	cxt.save();
	cxt.beginPath();
	cxt.moveTo(0,600);
	cxt.bezierCurveTo(540,400,660,canvas.height,canvas.width,600);
	cxt.lineTo(canvas.width,canvas.height);
	cxt.lineTo(0,canvas.height);
	cxt.closePath();
	var landStyle=cxt.createLinearGradient(0,canvas.height,0,0);
	landStyle.addColorStop(0.0,"#030");
	landStyle.addColorStop(1.0,"#580");
	cxt.fillStyle=landStyle;
	cxt.fill();
	cxt.restore();
}