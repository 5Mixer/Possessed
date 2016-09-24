Player = function (game, x, y) {
	this.map = map;

	this.components = new GameSubList();
	this.components.set("sprite", new Sprite('player',width/2,height/2));
	this.components.set("walkRandomly", new walkRandomly());
}
Player.prototype.update = function () {
	this.components.update(this);
}
Player.prototype.draw = function (c) {
	this.components.draw(c,this);
}
