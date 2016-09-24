keyMovement = function (parent){
	this.parent = parent;
	this.speed = 10;
}
keyMovement.prototype.update = function (dt,parent){
	if (input.down('left')){
		parent.components.get('sprite').pos.x -= this.speed / dt;
	}
	if (input.down('right')){
		parent.components.get('sprite').pos.x += this.speed / dt;
	}

	if (input.down('up')){
		parent.components.get('sprite').pos.y -= this.speed / dt;
	}
	if (input.down('down')){
		parent.components.get('sprite').pos.y += this.speed / dt;
	}
}
