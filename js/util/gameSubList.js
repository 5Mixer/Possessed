GameSubList = function(){
	this.traits = {};
}
GameSubList.prototype.get = function(id){
	return this.traits[id];
}
GameSubList.prototype.add = function(trait){
	this.traits[_.size(this.traits)] = trait;
}
GameSubList.prototype.set = function(id, trait){
	this.traits[id] = trait;
}

GameSubList.prototype.update = function (dt,parent){

	for (var key in this.traits) {
		if (this.traits.hasOwnProperty(key)) {
			if (typeof this.traits[key].update == "function"){
				this.traits[key].update(dt,parent)
			}
		}
	}
}
GameSubList.prototype.draw = function (c,parent){

	for (var key in this.traits) {
		if (this.traits.hasOwnProperty(key)) {
			if (typeof this.traits[key].draw == "function"){
				this.traits[key].draw(c,parent)
			}
		}
	}
}
