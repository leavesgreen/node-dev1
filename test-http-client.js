var http = require('http');
var qs = require('querystring');

var contents = qs.stringify({
	name:'byvoid',
	email:'byvoid@byvoid.com',
	address:'Zijing 2# ,Tsinghua University'
});

var options = {
	host:'www.byvoid.com',
	path:'/application/node/post.php',
	method:'POST',
	headers:{
		'Content-Type':'application/x-www-form-urlencoded',
		'Content-Length':contents.length
	}
};

var req = http.request(options,function(res){
	res.setEncoding('utf8');
	res.on('data',function(data){
		console.log(data);
	});
});

console.dir(req);

req.write(contents);
req.end();