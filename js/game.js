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
		'player' : 'imgs/player.png'
	},start)


	function start () {

		this.camera = new Cam(c);
		this.map = new Map();

		this.entities.add(this.map);
		this.entities.add(new Player(this,width/2,height/2))

		console.log(this.entities);

		requestAnimationFrame(update);
	}

	function update () {
		this.frame++;

		c.fillStyle = "hsl(10%, 50, 50)";
		c.fillRect(0,0,width,height);


		this.camera.transform(c);

		this.entities.update(this);
		this.entities.draw(c,this);


		this.camera.reset(c);

		requestAnimationFrame(update);
	}
}
game();
