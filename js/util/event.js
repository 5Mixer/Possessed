Circumstance = function (){
	this.listeners = [];
}
Circumstance.listen = function(listener){
	this.listeners.push(listener);
}
Circumstance.unlisten = function (listener){
	var index = this.listeners.indexOf(listeners);
	if (index > -1) {
	    this.listeners.splice(index, 1);
	}
}
Circumstance.run = function (o){
	for (var i=0; i<this.listeners.length; i++){
		this.listeners[i](o);
	}
}
