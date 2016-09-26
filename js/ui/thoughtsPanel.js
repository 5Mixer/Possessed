thoughtsPanel = function () {
	this.pos = { x: 800, y: 0 };
	this.size = {width: 100, height: 600 };

	this.focus = undefined;
	this.thoughts = ["Gee, I am a handsome looking fella."];
	this.displayedText = this.thoughts[0];
}
thoughtsPanel.prototype.update = function (c) {
	c.fillStyle = "hsl(140, 10%, 60%)";
	c.font="20px Raleway";
	c.fillText(this.displayedText,10,50);
}
