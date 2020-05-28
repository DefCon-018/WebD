window.onclick = function(){
    let num = document.getElementById('num');
    let print = document.getElementById('print');
    let todo = document.getElementById('todo');

    print.onclick = function(){
        let li = document.createElement('li');
        let xbtn = document.createElement('button');
        xbtn.innerText = 'x';

        let upbtn = document.createElement('button');
        upbtn.innerText = '^';

        let downbtn = document.createElement('button');
        downbtn.innerText = '>';

        xbtn.onclick = function(event){
            event.target.parentElement.remove();
        }

        upbtn.onclick = function(event){
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement, event.target.parentElement.previousElementSibling
            )
        }

        downbtn.onclick = function(event){
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling, event.target.parentElement
            )
        }

        li.innerText = num.value;
        
        li.appendChild(xbtn);
        li.appendChild(upbtn);
        li.appendChild(downbtn);
        todo.appendChild(li);

       
    }
}