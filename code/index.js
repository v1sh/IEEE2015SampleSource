window.onload = function() {
 
    var messages = [];
    var socket = io.connect('http://localhost:3000');
    var name = document.getElementById("name");
	var msg = document.getElementById("msg");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");
 
    socket.on('message', function (data) {
        if(data.msg) {
            var html = '';
            html += '<figure>' + data.message+ '<figcaption><p>'+data.name '</p></figcaption><p>'+data.msg+'</p></figure>';
        	content.innerHTML = html;
        } else {
            console.log("There is a problem:", data);
        }
    });
 
    sendButton.onclick = function() {
        if(name.value == "") {
            alert("Please type your name!");
        } else {
            var text = msg.value;
            socket.emit('send', { msg: text, username: name.value });
        }
    };
 
}

