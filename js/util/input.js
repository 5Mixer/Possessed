Input = function (){
	this.binds = {
		'up' : [38],
		'down' : [40],
		'left' : [37],
		'right' : [39]
	}


	this.keysDown = {}; //An array of keycodes that are down.
	this.mouse = {
		x: 0,
		y: 0,
		left: false,
		right: false
	}

	this.onKeyup = function (event){
		delete this.keysDown[event.keyCode];
	}
	this.onKeydown = function  (event){
		this.keysDown[event.keyCode] = true;
	}

}

Input.prototype.down = function (input){
	var charCodes = this.binds[input];

	for (var i = 0; i < charCodes.length; i++){
		if (this.keysDown[charCodes[i]])
			return true;
	}

	return false;
}



var Key = {
	_pressed: {},

	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	SPACE: 32,

	isDown: function(keyCode) {
		return this._pressed[keyCode];
	},

	onKeydown: function(event) {
		this._pressed[event.keyCode] = true;
	},

	onKeyup: function(event) {
		delete this._pressed[event.keyCode];
	}
};
