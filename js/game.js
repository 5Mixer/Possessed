//Game start point.
function game (){
	var cdom = document.getElementById('canvas')
	var c = cdom.getContext('2d')

	cdom.width = Math.floor(parseInt(getComputedStyle(canvas).width, 10)/2)*2;
	cdom.height = Math.floor(cdom.width * .5 /2)*2
	cdom.style.height = Math.floor(cdom.width * .5 /2)*2

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

	var p = undefined;

	function start () {

		this.camera = new Cam(c);
		this.map = new Map();
		p = new Player(this,0,0)


		this.entities.add(p)

		var m = new Mundane(this,-100,50)
		m.components.get('possessable').onPossess.run(m);
		this.entities.add(m)


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

		console.log(p.components.get('sprite').pos)

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
