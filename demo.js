var argment = require('./argment'),
	util = require('util');

// This function takes a bunch of arguments, many of which are optional
function foo(required, a, b, c){
	console.log({ required: required, a: a, b: b, c: c });
}

// If you only want to pass some options, you have to do this:
foo("I know I'm required", "I'm passing this argument", undefined, "and this one too");

// Or you (or the author!) could use argment:
foo = argment(['a', 'b', 'c'], 1, foo);

// And boom:
foo('Well, look', { a: 'at', c: 'that' });
