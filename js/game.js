//Game start point.
function game (){

	game = this;


	this.cdom = document.getElementById('canvas')
	this.c = cdom.getContext('2d')

	cdom.width = Math.floor(parseInt(getComputedStyle(canvas).width, 10)/2)*2;
	cdom.height = Math.floor(cdom.width * .5 /2)*2
	cdom.style.height = Math.floor(cdom.width * .5 /2)*2

	this.panelWidth = cdom.width * .3;

	this.width = cdom.width - panelWidth;
	this.height = cdom.height

	this.frame = 0;

	this.events = {
		'click' : new Circumstance(),
		'mousemove' : new Circumstance(),
		'mousedown' : new Circumstance(),
		'mouseup' : new Circumstance()
	}

	this.entities = new GameSubList();

	this.assets = new Assets();
	this.assets.loadAll({
		'mundane' : 'imgs/mundane.png',
		'player'  : 'imgs/player.png',
		'tile_0'  : 'imgs/tile_0.png',
		'tile_1'  : 'imgs/tile_1.png',
		'cursor'  : 'imgs/Crosshair.png',
		'gun'     : 'imgs/gun.png',
		'bullet'  : 'imgs/bullet.png'
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
		console.log(e)
	});

	cdom.addEventListener("mousemove", function(e) {
		var rect = cdom.getBoundingClientRect();
		var pos = {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		};
		game.events['mousemove'].run.call(game.events['mousemove'] ,pos);
		input.mouse.x = pos.x
		input.mouse.y = pos.y
	});

	cdom.addEventListener("mousedown",function (){
		input.mouse.left = true;
		game.events['mousedown'].run()
	})
	cdom.addEventListener("mouseup",function (){
		input.mouse.left = false;
		game.events['mouseup'].run()
	})

	this.events['mousemove'].listen(function(e){
		input.mouse.x = e.x;
		input.mouse.y = e.y;

		var worldPos = this.camera.screenToWorld(e);
		input.mouse.worldx = worldPos.x;
		input.mouse.worldy = worldPos.y;
	},this);

	/*cdom.addEventListener('mousemove', function(evt) {
		var	mousePos = getMousePos(canvas, evt);
		var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
		writeMessage(canvas, message);
	}, false);*/


	var p = undefined;

	this.currentlyPossessed = undefined;
	this.onPossess = new Circumstance();
	this.onUnPossess = new Circumstance();
	this.thoughtsPanel = new thoughtsPanel();
	this.itemsPanel = new ItemsPanel();

	var meter = new FPSMeter(undefined, {
				theme: 'dark',
				heat: 1,
				graph: 1,
				top: '60px',
				left: '40px'
			});

	function start () {

		this.cursor = new Cursor();

		this.camera = new Cam(c);
		this.map = new Map();

		
		cdom.style.cursor = assets.getAsset('cursor')

		this.possessionParticles = new ParticleSystem(0,0);
		this.entities.add(this.possessionParticles);

		console.log(this.entities);

		requestAnimationFrame(update);
	}

	var lastUpdate = Date.now();
	var avFPS = 0;


	c.font="20px Raleway";

	function update () {
		meter.tickStart();
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

		possessionParticles.behaviour = currentlyPossessed == p ? "grid" : "swirl"


		this.camera.reset(c);

		if (this.currentlyPossessed != undefined){
			var possessedSprite = currentlyPossessed.components.get("sprite")

			camera.target.x = possessedSprite.pos.x * 4 - width*1.25;
			camera.target.y = possessedSprite.pos.y * 4 - height*2;

			possessionParticles.pos.x = possessedSprite.pos.x - possessedSprite.origin.x/4;
			possessionParticles.pos.y = possessedSprite.pos.y - possessedSprite.origin.y/4;
		}

		if (frame % 2 == 0){
			avFPS = Math.round((avFPS+Math.round(1000/dt))/2)
			//console.log(this.camera.pos);
		}

		itemsPanel.draw(c);
		thoughtsPanel.draw(c);

		cursor.update();
		cursor.draw(c);

		meter.tick();
		requestAnimationFrame(update);
	}
}
game();
