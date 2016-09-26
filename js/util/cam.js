Cam = function (c){
	this.pos = { x: 0, y: 0};
	this.angle = 0;
	this.scalex = 4;
	this.scaley = 4;

	this.width = width/2;
	this.height = height;

	c.mozImageSmoothingEnabled = false;
	c.webkitImageSmoothingEnabled = false;
	c.msImageSmoothingEnabled = false;
	c.imageSmoothingEnabled = false;
}
Cam.prototype.transform = function (c){
	c.save();

	//Move the camera.
	c.translate(-this.pos.x,-this.pos.y);

	//Rotate around the middle of the camera.
	c.translate(this.width * 0.5,this.height * 0.5);
	c.rotate(this.angle);
	c.translate(-this.width * 0.5,-this.height * 0.5);

	//Scale everything, relative to the middle of the camera, by scale x and y.
	c.translate(-this.width/2*this.scalex,-this.height/2*this.scaley);
	c.scale(this.scalex,this.scaley);
	c.translate(this.width/this.scalex/2,this.height/this.scaley/2);

}
Cam.prototype.reset = function (c) {
	c.restore();
}
