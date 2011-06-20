function argment(callback, params){
	return function(inArgs){
		var args = [], i, l;
		for (i=0, l = params.length; i < l; i++) {
			args.push(inArgs[params[i]]);
		}
		return callback.apply(this, args);
	}
}
