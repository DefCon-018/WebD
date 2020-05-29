

// function someAsyncTask(callback){
//     console.log('async task started');
//     setTimeout(function(){
//         console.log('async task stop');
//         callback();
//     }, 2000);
// }

function somePromiseTask(){
    return new Promise((resolve, reject)=>{
        console.log('async task started');
     setTimeout(function(){
        console.log('async task stop');
        resolve();
      }, 2000);
    })
}

somePromiseTask().then(function(){
    console.log('task complete');
})