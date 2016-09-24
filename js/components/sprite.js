Sprite = function(assetId,x,y){
	this.image = assets.getAsset(assetId);

	this.pos = {x: x, y: y};
	this.origin = { x: this.image.width/2, y: this.image.height/2}
}
Sprite.prototype.draw = function(c,parent){
	c.drawImage(this.image,this.pos.x-this.origin.x,this.pos.y-this.origin.y);
}
