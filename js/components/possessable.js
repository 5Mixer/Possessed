Possessable = function (parent){
	this.isPossessed = false;
	this.onPossess = new Circumstance();
	this.onUnPossess = new Circumstance();

	this.onPossess.listen(function (o){
		if (game.currentlyPossessed != undefined){
			game.currentlyPossessed.components.remove('movement');
		}
		game.currentlyPossessed = parent;
		parent.components.set('movement', new KeyMovement(parent));
	});
	this.onUnPossess.listen(function (){
		parent.components.remove('movement');
	});
}
