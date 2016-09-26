Player = function (game, x, y) {
	this.map = map;

	this.components = new GameSubList();
	this.components.set('events', new EventManager());
	this.components.set("sprite", new Sprite('player',32,32));
	this.components.set("movement", new KeyMovement());

	// this.components.set("walkRandomly", new walkRandomly());
}


Player.prototype.update = function (dt) {
	this.components.update(dt,this);

	camera.pos.x = this.components.get("sprite").pos.x * 4 - width*1.25;
	camera.pos.y = this.components.get("sprite").pos.y * 4 - height*2;
}
Player.prototype.draw = function (c) {
	this.components.draw(c,this);

}
