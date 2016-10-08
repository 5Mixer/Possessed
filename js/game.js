//Game start point.
function game (){
	var cdom = document.getElementById('canvas')
	this.c = cdom.getContext('2d')

	cdom.width = Math.floor(parseInt(getComputedStyle(canvas).width, 10)/2)*2;
	cdom.height = Math.floor(cdom.width * .5 /2)*2
	cdom.style.height = Math.floor(cdom.width * .5 /2)*2


	this.width = cdom.width
	this.height = cdom.height

	this.frame = 0;

	this.events = {
		'click' : new Circumstance(),
		'mousemove' : new Circumstance()
	}

	this.entities = new GameSubList();

	this.assets = new Assets();
	this.assets.loadAll({
		'mundane' : 'imgs/mundane.png',
		'player' : 'imgs/player.png',
		'tile_0' : 'imgs/tile_0.png',
		'tile_1' : 'imgs/tile_1.png',
		'cursor' : 'imgs/Crosshair.png'
	},start)


	this.input = new Input();


	window.addEventListener('keyup', function (e) { input.onKeyup.call(input,e) }, false);
	window.addEventListener('keydown', function (e) { input.onKeydown.call(input,e) }, false);
	cdom.addEventListener("click", function(e) {
		var rect = cdom.getBoundingClientRect();

		game.events['click'].run.call(game.events['click'] ,{
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		});
	});

	cdom.addEventListener("mousemove", function(e) {
		var rect = cdom.getBoundingClientRect();

		game.events['mousemove'].run.call(game.events['mousemove'] ,{
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		});
	});

	/*cdom.addEventListener('mousemove', function(evt) {
		var	mousePos = getMousePos(canvas, evt);
		var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
		writeMessage(canvas, message);
	}, false);*/


	var p = undefined;

	this.currentlyPossessed = undefined;



	game = this;

	function start () {

		this.cursor = new Cursor();

		this.camera = new Cam(c);
		this.map = new Map();

		p = new Player(this,0,0)
		this.entities.add(p)


		cdom.style.cursor = assets.getAsset('cursor')


		var m = new Mundane(this,-100,50)
		m.components.get('possessable').onPossess.run(m);
		this.entities.add(m)
		this.currentlyPossessed = m;


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

		if (this.currentlyPossessed != undefined){

			camera.pos.x = currentlyPossessed.components.get("sprite").pos.x * 4 - width*1.25;
			camera.pos.y = currentlyPossessed.components.get("sprite").pos.y * 4 - height*2;
		}

		if (frame % 5 == 0){
			avFPS = Math.round((avFPS+Math.round(1000/dt))/2)
			//console.log(this.camera.pos);
		}

		cursor.update();
		cursor.draw(c);


		c.fillStyle = "hsl(1400, 10%, 60%)";
		c.font="20px Raleway";
		c.fillText("FPS: "+avFPS,10,50);

		requestAnimationFrame(update);
	}
}
game();
