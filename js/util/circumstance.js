Circumstance = function (){
	this.listeners = [];
}
Circumstance.prototype.listen = function(listener,context){
	this.listeners.push({ func: listener, context: context});
}
Circumstance.prototype.unlisten = function (listener){
	var index = this.listeners.indexOf(listeners);
	if (index > -1) {
	    this.listeners.splice(index, 1);
	}
}
Circumstance.prototype.run = function (o){
	for (var i=0; i<this.listeners.length; i++){
		this.listeners[i].func.call(this.listeners[i].context,o);
	}
}
