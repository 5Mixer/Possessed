Bullet = function (x, y,id) {
	this.id = id;
	this.components = new GameSubList();
	this.components.set('events', new EventManager());
	this.components.set("sprite", new Sprite(this,'bullet',x,y));
	this.components.set('death', new Death());
	var v = this.components.set('velocity', new Velocity(this))

	var dx = (game.input.mouse.worldx - x);
	var dy = (game.input.mouse.worldy - y);
	var mag = Math.sqrt(dx * dx + dy * dy);

	v.vx = (dx / mag) * 3;
	v.vy = (dy / mag) * 3;

	this.life = 0;
}

Bullet.prototype.update = function (dt) {
	this.life++;

	if (this.life > 100){
		this.components.get('death').die();
	}
	this.sprite = this.components.get("sprite");
	if (game.map.components.get('collision').doesCollide({ pos: {x:this.sprite.pos.x-this.sprite.origin.x,y:this.sprite.pos.y-this.sprite.origin.y}, width: this.sprite.width, height: this.sprite.height})){
		this.components.get('death').die();
	}

	this.components.update(dt,this);
}
Bullet.prototype.draw = function (c) {
	this.components.draw(c,this);
}
