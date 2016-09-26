EventManager = function (){
	this.listeners = {}; // { 'eventName' : event}
}
Event.prototype.listen = function(what,listener){
	if (this.listeners[what] == undefined){
		this.listeners[what] = new Circumstance();
	}
	this.listeners[what].listen(listener);
}
Event.prototype.unlisten = function (what,listener){
	if (this.listeners[what] == undefined){
		console.log("attempted to remove event handler ["+what+"] which does not exist.");
		return;
	}

	var index = this.listeners[what].unlisten(listener);
}
Event.prototype.run = function (what,o){
	if (this.listeners[what] == undefined){
		console.log("attempted to run event ["+what+"] which does not exist in this event handler.");
		return;
	}
	this.listeners[what].run(o);
}
