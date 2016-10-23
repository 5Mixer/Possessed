walkRandomly = function (){
	this.speed = 5;
	this.active = true;
	this.vx = 0;
	this.vy = 0;
	this.dir = 0;
}
walkRandomly.prototype.update = function(dt,entity){
	if (frame % 30 == 0){
		this.vx = 0;
		this.vy = 0;

		this.active = Math.random() > .4
		this.dir = Math.floor(Math.random()*4);
	}
	if (this.active){


		switch(this.dir){
			case 0: this.vx = 1;
			case 1: this.vy = 1;
			case 2: this.vx = -1;
			case 3: this.vy = -1;
		}

	}else{
		this.vx *= 0.6
		this.vy *= 0.6
	}
	entity.components.get('sprite').pos.x += this.vx;
	entity.components.get('sprite').pos.y += this.vy;
}
