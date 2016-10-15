ItemsPanel = function () {


	this.items = [];
	this.focus = undefined;

	this.size = {width: this.items.length*((2+16) + 8), height: 32 };
	this.pos = { x: game.width/2-this.size.width/2, y: game.height-4*16 };

	game.onUnPossess.listen(function(){
		if (this.items[0] != undefined)
			this.items[0].onUnSelect.call(game.currentlyPossessed);
	},this)

	game.onPossess.listen(function (what){
		this.focus = what;
		this.items = this.focus.components.get("possessable").items;
		if (this.items[0] != undefined)
			this.items[0].onSelect.call(what);
	},this)
}
ItemsPanel.prototype.draw = function (c) {

	this.size = {width: this.items.length*((2+16) + 8), height: 32 };
	this.pos = { x: game.width/2-this.size.width/2, y: game.height-4*16 };

	c.save()

	c.translate(this.pos.x,this.pos.y);
	c.scale(4,4)

	c.fillStyle = "rgb(61, 71, 65)";
	c.fillRect(0,0,this.size.width,this.size.height);

	for (var i = 0; i < this.items.length; i++){
		var image = game.assets.getAsset(this.items[i].image);

		c.drawImage(image, 5 + i*(2+16),0)
	}


	c.restore();
}
