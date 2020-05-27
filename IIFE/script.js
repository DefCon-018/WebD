(function(){
    console.log('Hello');
})();

//it can help us create local scope without poluting the global scope
(function(){
    var a = 10;
    console.log(a/5);
})();

// it is used in minfication of code
(function(l, p, q, r){
    l("3^4 = " + p(3, 4));
    l('4^3 = ' + p(4, 3));
    l('square root of 2 = ' + q(2))
    l('sin(10) = ' + r(10));
})(console.log, Math.pow, Math.sqrt, Math.sin);

// within for loop
for(var i = 0; i< 10; i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        }, 100);
    })(i);
}