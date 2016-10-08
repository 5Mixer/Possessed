Mundane = function (game, x, y) {
	this.map = map;

	this.components = new GameSubList();
	this.components.set('events', new EventManager());
	this.components.set("sprite", new Sprite(this,'mundane',64,64));
	this.components.set("possessable", new Possessable(this));

	this.components.get("sprite").clickHandler.onClick.listen(function(){
		this.components.get('possessable').onPossess.run()
	},this)
}

Mundane.prototype.update = function (dt) {
	this.components.update(dt,this);
}
Mundane.prototype.draw = function (c) {
	this.components.draw(c,this);

}
