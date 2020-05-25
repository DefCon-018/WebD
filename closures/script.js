function outer(args1, y){
    var val1 = 10;
    console.log(arguments);
    function inner(args2){             //whenever a function is created the scopes that are available at the birth place of the function is captured by the function and are available till the function is available in memory
        var val2 = 20;
        console.log(args1, val1, args2, val2, y)
        console.log(arguments[0]);
    }
    return inner;
}

let x = outer('param1', 10);
x('param2');