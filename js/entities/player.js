Player = function (game, x, y) {
	this.map = map;

	this.components = new GameSubList();
	this.components.set("sprite", new Sprite('player',width/2,height/2));
	this.components.set("movement", new keyMovement());
	// this.components.set("walkRandomly", new walkRandomly());
}
Player.prototype.update = function (dt) {
	this.components.update(dt,this);

	camera.pos.x = this.components.get("sprite").pos.x * 4 - width*2;
	camera.pos.y = this.components.get("sprite").pos.y * 4 - height*2;
}
Player.prototype.draw = function (c) {
	this.components.draw(c,this);

}
