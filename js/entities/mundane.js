Mundane = function (game, x, y) {
	this.map = map;

	this.components = new GameSubList();
	this.components.set('events', new EventManager());
	this.components.set("sprite", new Sprite(this,'mundane',64,64));
	var possession = this.components.set("possessable", new Possessable(this));

	possession.thoughts = [
		"I wish I could take that guys job."
	]
	possession.items = [
		{
			name: "gun",
			description: "A somewhat heavy pistol",
			image: "gun",
			onSelect : function (currentlyPossessed){
				if (this.components.get("shoot") == undefined){

					this.components.set("shoot",new ShootComponent(this,Bullet));
				}else{
					this.components.get("shoot").active = true;
					this.components.get("shoot").bullet = Bullet;
				}
			},
			onUnSelect : function (currentlyPossessed){
				this.components.get("shoot").active = false;
			}
		}
	]

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
