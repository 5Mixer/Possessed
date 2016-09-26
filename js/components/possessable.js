Possessable = function (parent){
	this.isPossessed = false;
	this.onPossess = new Circumstance();
	this.onUnPossess = new Circumstance();

	this.onPossess.listen(function (o){
		console.log("Oh")
		parent.components.set('movement', new KeyMovement(parent));
		console.log(parent.components);
	});
	this.onUnPossess.listen(function (){
		parent.components.remove('movement');
	});
}
