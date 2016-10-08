ClickEvent = function (region,parent) {
	this.region = region;
	this.parent = parent;
	this.hasParent = function () { return this.parent != null; }
	game.events["click"].listen(this.click,this);
	this.onClick = new Circumstance();
}
ClickEvent.prototype.click = function (e){
	var mousex = game.camera.screenToWorld(e).x;
	var mousey = game.camera.screenToWorld(e).y;


	if (this.region.x < mousex && this.region.x+this.region.width > mousex &&
		this.region.y < mousey && this.region.y+this.region.height > mousey){

		this.onClick.run(parent);
	}

}
