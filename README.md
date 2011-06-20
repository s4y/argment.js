# argment

…a tiny library whose end goal is to make argument-sniffing code like [this](https://github.com/jquery/jquery/blob/96501d38a935187461d45c40f17f8327b2e7cd91/src/ajax.js#L139) obsolete, by providing an easy way to declare what arguments a function expects.

## How you use it

argment is brand new! For the moment, it *augments* any function to take an options hash, and expands it into nice, old-fashioned arguments. Like this:

    function foo(a, b, c){
    	console.log(a, b, c);
    }
    foo = argment(foo, ['a', 'b', 'c']);
    
    foo({ a: 'one', c: 'three' });

Just call `argment` with a function and an array describing the arguments it takes.