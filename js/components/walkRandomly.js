walkRandomly = function (){
	this.speed = 5;
}
walkRandomly.prototype.update = function(dt,entity){
	if (frame % 10 == 0){
		entity.components.get('sprite').pos.x += (-5+Math.random() * 10) * dt;
		entity.components.get('sprite').pos.y += (-5+Math.random() * 10) * dt;
	}
}
