ShootComponent = function (parent,bullet){
	this.bullet = bullet;
	this.parent = parent;
	this.frame = 0;
	this.rate = 10;
	this.i = 0;
	this.active = true;
	this.bullets = new GameSubList();

	game.events["mousedown"].listen(function (){
		this.frame = 0;
	},this)
}
ShootComponent.prototype.update = function (){
	if (this.active){
		if (this.frame % this.rate == 0 && game.input.mouse.left){
			var id = this.i++;
			var b = new this.bullet(this.parent.components.get("sprite").pos.x,this.parent.components.get("sprite").pos.y,id);
			b.components.get("death").onDeath.listen(function(){
				this.bullets.remove(b.id);
			},this)
			this.bullets.set(id,b)
		}

		this.frame++;
	}

	this.bullets.update();
}
ShootComponent.prototype.draw = function (c){
	this.bullets.draw(c);
}
