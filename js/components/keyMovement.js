KeyMovement = function (parent){
	this.parent = parent;
	this.speed = 1;
}
KeyMovement.prototype.update = function (dt,parent){
	var newPosX = {x : parent.components.get('sprite').pos.x, y : parent.components.get('sprite').pos.y};
	var newPosY = {x : parent.components.get('sprite').pos.x, y : parent.components.get('sprite').pos.y};
	if (input.down('left')){
		newPosX.x -= this.speed;
	}
	if (input.down('right')){
		newPosX.x += this.speed;
	}
	if (!map.components.get('collision').doesCollide({ pos: {x:newPosX.x-parent.components.get('sprite').origin.x,y:newPosX.y-parent.components.get('sprite').origin.y}, width: parent.components.get('sprite').width, height: parent.components.get('sprite').height})){
		parent.components.get('sprite').pos.x = newPosX.x;
	}

	if (input.down('up')){
		newPosY.y -= this.speed;
	}
	if (input.down('down')){
		newPosY.y += this.speed;
	}

	if (!map.components.get('collision').doesCollide({ pos: {x:newPosY.x-parent.components.get('sprite').origin.x,y:newPosY.y-parent.components.get('sprite').origin.y}, width: parent.components.get('sprite').width, height: parent.components.get('sprite').height})){
		parent.components.get('sprite').pos.y = newPosY.y;
	}

}
