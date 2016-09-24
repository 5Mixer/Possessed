//Game start point.
function game (){
	var cdom = document.getElementById('canvas')
	var c = cdom.getContext('2d')

	this.width = cdom.width
	this.height = cdom.height

	this.frame = 0;

	this.entities = new GameSubList();

	this.assets = new Assets();
	this.assets.loadAll({
		'player' : 'imgs/player.png',
		'tile_0' : 'imgs/tile_0.png',
		'tile_1' : 'imgs/tile_1.png'
	},start)

	this.input = new Input();


	window.addEventListener('keyup', function (e) { input.onKeyup.call(input,e) }, false);
	window.addEventListener('keydown', function (e) { input.onKeydown.call(input,e) }, false);


	function start () {

		this.camera = new Cam(c);
		this.map = new Map();

		this.entities.add(new Player(this,width/2,height/2))

		console.log(this.entities);

		requestAnimationFrame(update);
	}

	var lastUpdate = Date.now();

	function update () {
		this.frame++;

		var now = Date.now();
		var dt = now - lastUpdate;
		lastUpdate = now;

		c.fillStyle = "hsl(10%, 50, 50)";
		c.fillRect(0,0,width,height);


		this.camera.transform(c);
		this.map.draw(c);

		this.entities.update(dt,this);
		this.entities.draw(c,this);

		this.camera.reset(c);

		requestAnimationFrame(update);
	}
}
game();
