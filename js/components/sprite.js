Sprite = function(assetId,x,y){
	this.image = assets.getAsset(assetId);

	this.pos = {x: x, y: y};
	this.width = this.image.width;
	this.height = this.image.height;
	this.origin = { x: this.width/2, y: this.height/2}
}
Sprite.prototype.draw = function(c,parent){
	c.drawImage(this.image,this.pos.x-this.origin.x,this.pos.y-this.origin.y);
}
