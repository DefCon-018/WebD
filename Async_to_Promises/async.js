import { some } from "async";

function someAsyncTask(callback){
    console.log('count down started');
    setTimeout(function(){
        callback();
    }, 3000)
}

someAsyncTask(function(){
    console.log('count down stoped');
})
