Path = function (sprite,points){
	this.sprite = sprite;
	this.mode = "loop"
	this.progress = 0;

	this.points = points;
	this.speed = 1;
}
Path.prototype.update = function () {
	var length = this.calculateLength();

	this.progress += this.speed/length;
	if (this.progress > 1){
		this.progress = 0;
	}

	//R is used to calculate what segment is active.
	//It is incremented by each segment length until it reaches overall. progress.
	var r = 0
	var segment = 0;

	//Loop through all points and increment r by segment length.
	//If we have reached our current progress, we have found the active segment.
	for (var i = 0; i < this.points.length; i++){
		var startIndex = i;
		var endIndex = i+1;

		if (endIndex > this.points.length) endIndex = 0;
		r += this.dist(this.points[startIndex],this.points[endIndex])

		if (r/length >= this.progress){
			segment = startIndex
			break;
		}
	}

	//Get start/end points of this segment.
	var a = this.points[segment];

	if (segment+1 > this.points.length){
		var b = this.points[0]
	}else{
		var b = this.points[segment+1];
	}


	//console.clear();
	//Get progress along this segment.
	var distProgressed = this.progress * length;
	var segmentLength = this.dist(a,b)
	var distOfLeadingSegments = r;
	var segProgress = 1+(distProgressed - distOfLeadingSegments) / segmentLength
	console.log("A: "+JSON.stringify(a) + " B: "+JSON.stringify(b))
	console.log("segment start " + r);
	console.log("current length " + (this.progress*length))
	console.log(segProgress);

	//Finally lerp to actual location.
	this.sprite.pos.x = a.x + ((b.x-a.x)*segProgress)
	this.sprite.pos.y = a.y + ((b.y-a.y)*segProgress)

	console.log(this.sprite.pos);
}
Path.prototype.calculateLength = function () {

	var length = 0
	for (var i = 0; i < this.points.length-1; i++){
		var pointA = this.points[i];
		var pointB = this.points[i+1];

		length += this.dist(pointA,pointB);
	}
	return length;
}
Path.prototype.dist = function (pointA,pointB){
	var dx = pointA.x - pointB.x
	var dy = pointA.y - pointB.y

	var dist = Math.sqrt(dx*dx + dy*dy);
	return dist;
}
