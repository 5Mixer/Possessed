Player = function (game, x, y) {
	this.map = game.map;

	this.components = new GameSubList();
	this.components.set('events', new EventManager());
	this.components.set("sprite", new Sprite(this,'player',x,y));
	this.components.set("possessable", new Possessable(this));

	this.components.get('sprite').clickHandler.onClick.listen(function(){
		this.components.get('possessable').onPossess.run()
	},this)
}

Player.prototype.update = function (dt) {
	this.components.update(dt,this);
}
Player.prototype.draw = function (c) {
	this.components.draw(c,this);
}
