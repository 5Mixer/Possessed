BoxCollision = function () {
	this.boxes = [] //Each with a pos, width, and height property
	/*this.boxes.push(
		{
			pos : {
				x: 0,
				y: 0
			},
			width: 0,
			height: 0

		}
	)*/
}
BoxCollision.prototype.registerBox = function (shape){
	this.boxes.push(shape);
}
BoxCollision.prototype.doesCollide = function (shape){
	//console.log(this.boxes);
	for (var i = 0; i < this.boxes.length; i++){
		if (this.boxes[i].pos.x < shape.pos.x + shape.width &&
			this.boxes[i].pos.x + this.boxes[i].width > shape.pos.x &&
			this.boxes[i].pos.y < shape.pos.y + shape.height &&
			this.boxes[i].height + this.boxes[i].pos.y > shape.pos.y) {
			// collision detected!
			return true;
		}
	}

	return false;
}
