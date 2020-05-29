
function download(url){
    return new Promise((resolve, reject)=>{
        if(url.startsWith('http')){
            let fileName = url.split('/').pop();
            resolve(fileName);
        }
        else{
            reject(new Error('file does not starts with http'));
        }
    })
}

function resize(fileName){
    return new Promise((resolve, reject)=>{
        if(fileName.endsWith('.png')){
            let resizedFile = fileName.split('.')[0] + '-resized' + '.png';
            resolve(resizedFile);
        }
        else{
            reject(new Error('file does not have .png extension'));
        }
    })
}

function upload(resizedfileName){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            let uploadedFile = 'http//imgur/' + resizedfileName;
            resolve(uploadedFile);
        },3000)
    })
}

// download('http//cb.lk/logo.png').then(function(fileName){
//     resize(fileName).then(function(resizedFile){
//         console.log(resizedFile)
//     })
// })

download('http//cb.lk/logo.png').then(resize).then(upload).then(function(uploadedFile){
    console.log('file uploaded at ' + uploadedFile);
}).catch(function(err){
    console.error(err);
})
