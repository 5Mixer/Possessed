Circumstance = function (){
	this.listeners = [];
}
Circumstance.prototype.listen = function(listener){
	this.listeners.push(listener);
}
Circumstance.prototype.unlisten = function (listener){
	var index = this.listeners.indexOf(listeners);
	if (index > -1) {
	    this.listeners.splice(index, 1);
	}
}
Circumstance.prototype.run = function (o){
	
	for (var i=0; i<this.listeners.length; i++){
		this.listeners[i](o);
	}
}
