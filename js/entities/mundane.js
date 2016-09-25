Mundane = function (game, x, y) {
	this.map = map;


	this.components = new GameSubList();
	this.components.set("sprite", new Sprite('mundane',width/2,height/2));
}
Mundane.prototype.update = function (dt) {
	this.components.update(dt,this);
}
Mundane.prototype.draw = function (c) {
	this.components.draw(c,this);

}
