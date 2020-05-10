$(() => {
    let item = $('#item');
    let list = $('#list');

    $('#prepend').click(() => {
        let text = item.val();
        list.prepend($('<li>').text(text));
    })

    $('#append').click(() =>{
        let text = item.val();
        list.append($('<li>').text(text));
    })
})