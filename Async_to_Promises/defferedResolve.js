function somePromise(){
    return new Promise((resolve, reject)=>{
        console.log('Task is started');
        setTimeout(function(){
            console.log('task is complete')
            resolve();
        }, 2000)
    })
}
let p = somePromise();
setTimeout(function(){
    p.then(function(){
        console.log('run after completion of task')
    })
}, 5000)