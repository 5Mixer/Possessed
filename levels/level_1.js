level_1 = {
	"width" : 25,
	"height" : 20,
	"tiles" :
		[
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
			1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
			1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
			1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
			1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
			1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
			1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,
			1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
			1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
			1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
			1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
			1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		],
	"onLoad" : function (game){
		var player = new Player(this,96,272)
		player.components.get('possessable').onPossess.run(player);
		game.entities.add(player)

		for (var i = 0; i < 10; i++){

			var r = new Player(this,90+(i*1),Math.random()*70)
			//r.components.get("sprite").image = assets.getAsset("gun");
			r.components.set("walk", new walkRandomly())
			game.entities.add(r)
		}

		var guard = new Mundane(game,96,200)

		game.entities.add(guard)

		var warden = new Mundane(game,16*21,50)
		game.entities.add(warden)

		var prisoner = new Mundane(game,32, 100)
		game.entities.add(prisoner)

		prisoner.components.add(new Path(prisoner.components.get("sprite"),[
			{x: 100, y: 100},
			{x: 150, y: 100},
			{x: 150, y: 150},
			{x: 250, y: 150},
			{x: 200, y: 100},
			{x: 150, y: 100},
			{x: 150, y: 150},
			{x: 100, y: 150},
			{x: 100, y: 100},
		]));


		var key = new Entity()
		game.entities.add(key)
		key.components.set('events', new EventManager());
		key.components.set('sprite', new Sprite(this,'bullet',34,34));
		key.components.set('collision', new BoxCollision(key.components.get('sprite')))
	}
}
