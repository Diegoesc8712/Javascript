var socket = io.connect('http://172.16.255.7:6677',{'forceNew':true});

socket.on('messages', function(data){
    console.log(data);
    render(data);
});

function render(data){
    var html = data.map(function(messages, index){
        return (`
            <div class="messages">
                <strong>${messages.nickname}</strong> Dice: 
                <p>${messages.text}</p>
            </div>    
        `);
    }).join(' ');


    document.getElementById('messages').innerHTML = html;
    
}
function addMessage(e){
    var messages = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };

    document.getElementById('nickname').style.display = 'none';
    socket.emit('add-message', messages);
    return false;
};