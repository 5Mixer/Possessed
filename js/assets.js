// custom made asset loader.

Assets = function () {
	this.resources = {};
}
Assets.prototype.getAsset = function (identifier){
	if (this.resources[identifier] != null) {
		return this.resources[identifier]
	}else{
		console.log("Request for asset "+identifier+" which has not been loaded/found.")
	}
}
Assets.prototype.loadAll = function (resourceList, onFinish) {

	var loadedAssets = 0;
	var totalAssets = _.size(resourceList);
	console.log(resourceList);
	console.log("Loading " + totalAssets + " asset/s.");

	self = this;
	for (var resourceId in resourceList){
		var image = new Image();


		image.src = resourceList[resourceId];
		console.log("Loading "+resourceId + " from "+image.src);
		image.resourceId = resourceId;

		image.onload = function (){
			//Here, 'this' refers to the 'image' variable,
			//so 'self' points to the assets class.

			self.resources[this.resourceId] = this;

			loadedAssets++;

			console.log("Loaded "+loadedAssets+" of "+totalAssets+" resources. (Asset: "+this.resourceId+" from "+this.src+")");
			if (loadedAssets == totalAssets){

				self.resources["level_1"] = level_1;

				console.log(self.resources);

				console.log("Finished loading resources.")
				onFinish();
			}
		}
	}

}
