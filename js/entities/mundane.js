Mundane = function (game, x, y) {
	this.map = map;


	this.components = new GameSubList();
	this.components.set("sprite", new Sprite('mundane',64,64));
	this.components.set("possessable", new Possessable(this));
}
Mundane.prototype.update = function (dt) {
	this.components.update(dt,this);
}
Mundane.prototype.draw = function (c) {
	this.components.draw(c,this);

}
