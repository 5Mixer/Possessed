Map = function (){
	this.level = assets.getAsset('level_1');
	this.tileSize = 16;
}
Map.prototype.getTile = function(x,y){
	return this.level.tiles[(y*this.level.width)+x];
}
Map.prototype.draw = function (c){
	for (var x = 0; x < this.level.width; x++){
		for (var y = 0; y < this.level.height; y++){
			c.drawImage(assets.getAsset('tile_'+this.getTile(x,y)), x*this.tileSize, y*this.tileSize);
		}
	}
}
