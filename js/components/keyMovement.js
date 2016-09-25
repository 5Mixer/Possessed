keyMovement = function (parent){
	this.parent = parent;
	this.speed = 2;
}
keyMovement.prototype.update = function (dt,parent){
	var newPos = {x : parent.components.get('sprite').pos.x, y : parent.components.get('sprite').pos.y};
	if (input.down('left')){
		newPos.x -= this.speed;
	}
	if (input.down('right')){
		newPos.x += this.speed;
	}
	
	if (input.down('up')){
		newPos.y -= this.speed;
	}
	if (input.down('down')){
		newPos.y += this.speed;
	}

	if (!map.components.get('collision').doesCollide({ pos: {x:newPos.x-parent.components.get('sprite').origin.x,y:newPos.y-parent.components.get('sprite').origin.y}, width: parent.components.get('sprite').width, height: parent.components.get('sprite').height})){
		parent.components.get('sprite').pos = newPos;
	}

}
