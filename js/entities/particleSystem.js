Particle = function (id) {
	this.id = id;
	this.x = 0;
	this.y = 0;
	this.targetx = 0;
	this.targety = 0;
	this.vx = 0;
	this.vy = 0;
	this.colour = {
		h: 180,
		s: 75,
		l: 50
	}
}
Particle.prototype.draw = function(c){
	this.x += Math.round(((this.targetx-this.x)/5))
	this.y += Math.round(((this.targety-this.y)/5))
	c.fillStyle = "hsl("+this.colour.h+","+this.colour.s+"%,"+this.colour.l+"%)";


	c.fillRect(this.x,this.y,2,2);
}

ParticleSystem = function (x,y) {

	this.components = new GameSubList();
	this.particles = new GameSubList();

	this.pos = { x: x, y: y}

	this.frame = 0;

	for (var i = 0; i < 150; i++){
		var p = new Particle(i);
		p.colour.h = 170+ i/10;
		this.particles.add(p);

	}

	this.behaviour = "grid";

	this.behaviours = {
		'grid' : function (particle){
			var angle = ((360 / this.particles.length()) * (particle.id))// + (this.frame / 1500);
			var randomisation = 6;
			var minRadius = 20;
			var playerGridSize = 8;
			var gridSize = 16;

			var x = Math.round(this.pos.x/playerGridSize)*playerGridSize;
			var y = Math.round(this.pos.y/playerGridSize)*playerGridSize;


			particle.targetx = Math.round((x + Math.sin(angle * 180/Math.PI) * minRadius -(randomisation/2)+Math.random()*randomisation)/gridSize)*gridSize //* (Math.sin(angle/100)*5+15)) / 16)*16;
			particle.targety = Math.round((y + Math.cos(angle * 180/Math.PI) * minRadius -(randomisation/2)+Math.random()*randomisation)/gridSize)*gridSize//* (Math.cos(angle/100)*5+15)) / 16)*16;
		},
		'swirl' : function (particle){
			var angle = ((360 / this.particles.length()) * (particle.id)) + this.frame / 1000;

			particle.targetx = this.pos.x + Math.sin(angle * 180/Math.PI) * (Math.sin(angle/100)*5+15);
			particle.targety = this.pos.y + Math.cos(angle * 180/Math.PI) * (Math.cos(angle/100)*5+15);
		},
		'orbit' : function(particle){
			var angle = ((360 / this.particles.length()) * (particle.id)) + (this.frame / 4000);
			var randomisation = 5;
			var minRadius = 16+ Math.sin(((360 / this.particles.length())  * particle.id) * 180/Math.PI * 0.15 )*2;
			var playerGridSize = .0000000001;
			var gridSize = .000000000000000000016;

			var x = Math.round(this.pos.x/playerGridSize)*playerGridSize;
			var y = Math.round(this.pos.y/playerGridSize)*playerGridSize;


			particle.targetx = Math.round((x + Math.sin(angle * 180/Math.PI) * minRadius -(randomisation/2)+Math.random()*randomisation)/gridSize)*gridSize //* (Math.sin(angle/100)*5+15)) / 16)*16;
			particle.targety = Math.round((y + Math.cos(angle * 180/Math.PI) * minRadius -(randomisation/2)+Math.random()*randomisation)/gridSize)*gridSize//* (Math.cos(angle/100)*5+15)) / 16)*16;
		}

	}

	this.components.set('events', new EventManager());
}

ParticleSystem.prototype.update = function (dt) {
	this.frame++;
	for (var i = 0; i < this.particles.length(); i++){
		this.behaviours[this.behaviour].call(this,this.particles.traits[i])

	}

	this.components.update(dt,this);
}
ParticleSystem.prototype.draw = function (c) {
	this.components.draw(c,this);

	this.particles.update();
	this.particles.draw(c);
}
