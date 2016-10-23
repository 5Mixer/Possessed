Entity = function () {
	this.components = new GameSubList();
}

Entity.prototype.update = function (dt) {
	this.components.update(dt,this);
}
Entity.prototype.draw = function (c) {
	this.components.draw(c,this);
}
