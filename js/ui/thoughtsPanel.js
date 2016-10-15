thoughtsPanel = function () {
	this.pos = { x: cdom.width-panelWidth, y: 0 };
	this.size = {width: panelWidth, height: cdom.height };

	this.thoughts = ['...'];
	this.displayedText = this.thoughts[0];
}
thoughtsPanel.prototype.draw = function (c) {

	this.focus = game.currentlyPossessed;
	if (this.focus != undefined){
		this.thoughts = this.focus.components.get('possessable').thoughts;
		this.displayedText = this.thoughts[0];
	}


	c.save()
	c.translate(this.pos.x,this.pos.y);

	c.fillStyle = "rgb(61, 71, 65)";
	c.fillRect(0,0,this.size.width,this.size.height);

	c.fillStyle = "hsl(141, 91%, 53%)";
	c.font="20px Indie Flower";
	c.fillText(this.displayedText,10,50);
	c.restore();
}
