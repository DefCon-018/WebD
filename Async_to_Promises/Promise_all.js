function download(url){
    return new Promise((resolve, reject)=>{
        if(url.startsWith('http')){
            console.log('download start at: ' + url);
            setTimeout(function(){
                let fileName = url.split('/').pop();
                resolve(fileName);
            }, 3000);
        }
        else{
            reject(new Error('file does not have http'));
        }
    })
}

function resize(fileName){
    return new Promise((resolve, reject)=>{
        if(fileName.endsWith('.png')){
            console.log('resizing start at: ' + fileName);
            setTimeout(function(){
                let resizedFile = fileName.split('.')[0] + '-resized' + '.png';
                resolve(resizedFile);
            }, 3000);
        }
        else{
            reject(new Error('file does not have .png extention'));
        }
    })
}

function upload(resizedFile){
    return new Promise((resolve, reject)=>{
        console.log('uploading file at: ' + resizedFile);
        setTimeout(function(){
            let uploadedFile = 'http://imgur/' + resizedFile;
            resolve(uploadedFile);
        }, 3000)
    })
}

Promise.all([
    download('http://cb.lk/logo.png'),
    download('http://cb.lk/banner.png'),
    download('http://cb.lk/promo.png')
]).then(function(downloadValues){
    return Promise.all(downloadValues.map(resize));
}).then(function(resizeValues){
    return Promise.all(resizeValues.map(function(item){return upload(item)}));
}).then(function(uploadValues){
    console.log(uploadValues)
}).catch(function(err){
    console.log(err);
})



//http://cb.lk/logo.png