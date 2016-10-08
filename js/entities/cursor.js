Cursor = function () {

	this.components = new GameSubList();
	this.components.set('events', new EventManager());
	this.sprite = this.components.set("sprite", new Sprite(this,"cursor",0,0));
	this.sprite.width *= 4;
	this.sprite.height *= 4;
	this.sprite.origin.x = this.sprite.width/2;
	this.sprite.origin.y = this.sprite.height/2;

	game.events["mousemove"].listen(function (e) {
		this.sprite.pos = e;
	},this);
}

Cursor.prototype.update = function (dt) {
	this.components.update(dt,this);
}
Cursor.prototype.draw = function (c) {
	this.components.draw(c,this);
}
