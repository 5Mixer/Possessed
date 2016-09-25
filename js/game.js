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
		'mundane' : 'imgs/mundane.png',
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
		this.entities.add(new Mundane(this,width/2,height/2))

		console.log(this.entities);

		requestAnimationFrame(update);
	}

	var lastUpdate = Date.now();
	var avFPS = 0;

	function update () {
		this.frame++;

		var now = Date.now();
		var dt = now - lastUpdate;
		lastUpdate = now;

		c.fillStyle = "hsl(0, 2%, 21%)";
		c.fillRect(0,0,width,height);


		this.camera.transform(c);

		this.map.draw(c);

		this.entities.draw(c,this);
		this.entities.update(dt,this);

		this.camera.reset(c);

		if (frame % 5 == 0){
			avFPS = Math.round((avFPS+Math.round(1000/dt))/2)
			//console.log(this.camera.pos);
		}


		c.fillStyle = "hsl(1400, 10%, 60%)";
		c.font="20px Raleway";
		c.fillText("FPS: "+avFPS,10,50);

		requestAnimationFrame(update);
	}
}
game();
