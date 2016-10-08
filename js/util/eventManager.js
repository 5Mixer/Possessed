EventManager = function (){
	this.events = {};
}
EventManager.prototype.listen = function(eventId,listener){
	if (this.events[eventId] == undefined){
		console.log("an event was listened to with the id: "+eventId + " but it doesn't exist");
		return;	
	}
	this.events[eventId].push(listener);
}
EventManager.prototype.unlisten = function (listener){
	var index = this.listeners.indexOf(listeners);
	if (index > -1) {
	    this.listeners.splice(index, 1);
	}
}
EventManager.prototype.run = function (o){
	
	for (var i=0; i<this.listeners.length; i++){
		this.listeners[i](o);
	}
}
