Sprite = function(parent,assetId,x,y){
	this.image = assets.getAsset(assetId);

	this.pos = {x: x, y: y};
	this.width = this.image.width;
	this.height = this.image.height;
	this.origin = { x: this.width/2, y: this.height/2}
	this.color = {
		h: 0,
		s: 50,
		v: 50
	};

	this.clickHandler = new ClickEvent({x: this.pos.x-this.origin.x, y: this.pos.y-this.origin.y, width: this.width, height: this.height},this);

}
Sprite.prototype.draw = function(c,parent){
	this.clickHandler.region = {x: this.pos.x-this.origin.x, y: this.pos.y-this.origin.y, width: this.width, height: this.height};
	c.drawImage(this.image,this.pos.x-this.origin.x,this.pos.y-this.origin.y,this.width,this.height);
}
