function argment(params, required, callback){
	if (typeof required === 'function') {
		callback = required;
		required = 0;
	}
	return function(){
		var args = [], options, i = 0, l;
		if (required) {
			for (i = 0; i < required; i++) {
				args.push(arguments[i]);
			}
		}
		options = arguments[i];
		if (options) {
			for (i = 0, l = params.length; i < l; i++) {
				args.push(options[params[i]]);
			}
		}
		return callback.apply(this, args);
	};
}
