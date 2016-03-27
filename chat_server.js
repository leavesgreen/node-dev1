var http=require('http');
var fs=require('fs');


var connect=require('connect');
var app=connect.createServer(
    connect.static(__dirname);
).listen(8080);

var sio=require('socket.io');
var io = sio.listen(app);

var nicknames=[];
var onlines=[];
io.sockets.on('connection',function(socket){
    //用冒号分割分组事件类型
    socket.on('user:pub',function(msg){
        socket.broadcast.emit('user:pub',socket.nickname,msg);
    })
    socket.on('user:private',function(msg,to){
        if(onlines[to]){
            onlines[to].emit('user.private',socket.nickname,msg,to));
        }
    })
})

socket.on('nickname',function(nick,fn){
    if(nicknames[nick]){
        fn(true);
    }else{
        fn(false);
        nicknames[nick]=socket.nickname=nick;
        onlines[nick]=socket
        socket.broadcast.emit('announcement',nick+'connected...');
        io.sockets.emit('nicknames',nicknames)
    }
})

socket.on('disconnect',function(){
    if(!socket.nickname){
        return;
    }
    delete nicknames[socket.nickname];
    delete onlines[socket.nickname];

    socket.broadcast.emit('announcement',socket.nickname+' disconnect...');
    socket.broadcast.emit('nicknames',nicknames);
})
