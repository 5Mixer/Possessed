Map = function (){
	this.level = assets.getAsset('level_1');
	this.tileSize = 16;

	//TODO: Load this from a file.
	this.tileData = {
		0 : {
			name : 'ground',
			collide : false
		},
		1 : {
			name : 'wall',
			collide : true
		}
	}

	this.components = new GameSubList();

	var col = new BoxCollision();
	for (var x = 0; x < this.level.width; x++){
		for (var y = 0; y < this.level.height; y++){
			if (this.getTile(x,y) == 1){
				col.registerBox({
					pos: { x: 300+x*this.tileSize, y: 250+y*this.tileSize },
					width: this.tileSize,
					height: this.tileSize
				});
			}
		}
	}
	this.components.set('collision',col);
}
Map.prototype.getTile = function(x,y){
	return this.level.tiles[(y*this.level.width)+x];
}
Map.prototype.getTileData = function(tileId){
	return this.tileData[tileId];
}
Map.prototype.update = function (dt) {
	this.components.update(dt,this);
}
Map.prototype.draw = function (c){
	for (var x = 0; x < this.level.width; x++){
		for (var y = 0; y < this.level.height; y++){
			c.drawImage(assets.getAsset('tile_'+this.getTile(x,y)), 300+x*this.tileSize, 250+y*this.tileSize);
		}
	}
	this.components.draw(c,this);
}
