window.onload = function(){
    let num = document.getElementById('num');
    let list = document.getElementById('lists');
    let print = document.getElementById('print');
    
    // print.onclick = function(){
    //     let start = new Date().getTime();
    //     let N = parseInt(num.value);
    //     for(let i = 1; i<=N; i++){
    //         list.innerHTML += "<li>" + i + "</li>";
    //     }
    //     console.log(new Date().getTime() - start);
    // }

    // print.onclick = function(){
    //     let start = new Date().getTime();
    //     let n = parseInt(num.value);
    //     let tempHTML = '';
    //     for(let i = 1; i<= n; i++){
    //         tempHTML += '<li>' + i + '</li>'
    //     }
    //     list.innerHTML = tempHTML;
    //     console.log(new Date().getTime() - start);
    // }


    print.onclick = function(){
        let n = parseInt(num.value);
        for(let i = 1; i<= n; i++){
            let item = document.createElement('li');
            item.innerText = i;
            list.appendChild(item);
        }
    }

}