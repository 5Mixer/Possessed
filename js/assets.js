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
	console.log("Loading " + totalAssets + " asset/s.");

	for (var resourceId in resourceList){
		var image = new Image();

		image.src = resourceList[resourceId];
		self = this;

		image.onload = function (){
			self.resources[resourceId] = image;

			loadedAssets++;

			console.log("Loaded "+loadedAssets+" of "+totalAssets+" resources. (Asset: "+resourceId+")");
			if (loadedAssets == totalAssets){
				console.log("Finished loading resources.")
				onFinish();
			}
		}
	}

}
