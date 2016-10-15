//side note. i have a cold at the moment and feel dead. move along.

Death = function(parent){
	this.life = 0;
	this.maxLife = -1;
	this.alive = true;

	this.onDeath = new Circumstance(); //This can be listened to, so that bullets/etc are removed from their containing objects.
}
Death.prototype.die = function (){
	this.alive = false
	this.onDeath.run();
}
