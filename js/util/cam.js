Cam = function (c){
	this.target = { x: 0, y: 0};
	this.pos = { x: 0, y: 0};
	this.angle = 0;
	this.scalex = 4;
	this.scaley = 4;

	this.width = game.width/2;
	this.height = game.height;

	c.mozImageSmoothingEnabled = false;
	c.webkitImageSmoothingEnabled = false;
	c.msImageSmoothingEnabled = false;
	c.imageSmoothingEnabled = false;
}
Cam.prototype.transform = function (c){
	c.save();

	this.pos.x += (this.target.x - this.pos.x) / 5;
	this.pos.y += (this.target.y - this.pos.y) / 5;

	// //Move the camera.
	c.translate(-this.pos.x,-this.pos.y);
	c.translate(-this.width*1.5,-this.height*1.5)

	//Rotate around the middle of the camera.
	c.translate(this.width * 0.5,this.height * 0.5);
	c.rotate(this.angle);
	c.translate(-this.width * 0.5,-this.height * 0.5);

	//Scale everything, relative to the middle of the camera, by scale x and y.
	//c.translate(-this.width/2*this.scalex,-this.height/2*this.scaley);
	c.scale(this.scalex,this.scaley);
	//c.translate(this.width/this.scalex/2,this.height/this.scaley/2);

}
Cam.prototype.screenToWorld = function(point){

	var p = { x: point.x, y: point.y };

	p.x += this.pos.x + this.width*1.5
	p.y += this.pos.y + this.height*1.5

	p.x = Math.floor(p.x/4);
	p.y = Math.floor(p.y/4);

	return p;

}
Cam.prototype.reset = function (c) {
	c.restore();
}
