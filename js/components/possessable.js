Possessable = function (parent){
	this.isPossessed = false;
	this.onPossess = new Circumstance();
	this.onUnPossess = new Circumstance();
	this.thoughts = [
		"i wonder what's for dinner..."
	]
	this.items = [

	]

	this.onPossess.listen(function (o){
		if (game.currentlyPossessed != undefined){
			game.currentlyPossessed.components.get("possessable").onUnPossess.run();
			game.onUnPossess.run();
		}
		game.currentlyPossessed = parent;
		parent.components.set('movement', new KeyMovement(parent));
		game.onPossess.run(parent);
	},this);
	this.onUnPossess.listen(function (){
		parent.components.remove('movement');
	},this);
}
