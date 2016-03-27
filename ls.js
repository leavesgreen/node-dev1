var fs=require('fs');
var files=fs.readdirSync('.');
for(f in files){
	//console.log(files[f]);
	console.log(f);
}