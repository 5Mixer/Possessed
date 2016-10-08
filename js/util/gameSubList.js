GameSubList = function(){
	this.traits = {};
}
GameSubList.prototype.get = function(id){
	return this.traits[id];
}
GameSubList.prototype.add = function(trait){
	return this.traits[_.size(this.traits)] = trait;
}
GameSubList.prototype.set = function(id, trait){
	return this.traits[id] = trait;
}
GameSubList.prototype.remove = function(id){
	this.traits = _.omit(this.traits,id);
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
