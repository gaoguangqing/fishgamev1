var babyobj=function(){
	this.x;
	this.y;
	this.angle;
	this.babyEye=new Image();
	this.babyBody=new Image();
	this.babyTail=new Image();
	
	this.babyTailTimer=0;
	this.babyTailCount=0;
}

babyobj.prototype.init=function()
{
	this.x=canWidth*0.5-50;
	this.y=canHeight*0.5+50;
		this.angle=0;
	this.babyEye.src="./img/babyEye0.png";
	this.babyBody.src="./img/babyFade0.png";
	this.babyTail.src="./img/babyTail0.png";
}

babyobj.prototype.draw=function()
{
	//lerp x,y
	this.x=lerpDistance(mom.x,this.x,0.98);
	this.y=lerpDistance(mom.y,this.y,0.98);

	//delta angle
	var deltaY=mom.y-my;
	var delatX=mom.x-mx;
	
	var beta=Math.atan2(deltaY,delatX);
	//lerp angle
	this.angle=lerpAngle(beta,this.angle,0.6);
	
	
	//baby tail count
	this.babyTailTimer+=deltaTime;
	if(this.babyTailTimer>50)
	{
		this.babyTailCount=(this.babyTailCount+1)%8;
		this.babyTailTimer%=50;
	}
	
	ctx1.save();
	
	
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	var babyTailCount=this.babyTailCount;
	ctx1.drawImage(this.babyBody,-this.babyBody.width*0.5,-this.babyBody.height*0.5);
	ctx1.drawImage(babyTail[babyTailCount],23-babyTail[babyTailCount].width*0.5,-babyTail[babyTailCount].height*0.5);
	ctx1.drawImage(this.babyEye,-this.babyEye.width*0.5,-this.babyEye.height*0.5);
	
	ctx1.restore();
}
