Velocity = function (parent) {
	this.sprite = parent.components.get("sprite");
	this.vx = 1;
	this.vy = 0;
}
Velocity.prototype.update = function () {
	this.sprite.pos.x += this.vx;
	this.sprite.pos.y += this.vy;
}
