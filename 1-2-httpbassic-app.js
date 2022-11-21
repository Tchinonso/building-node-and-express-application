const http = require('http')
const { readFileSync } = require('fs')
//get all file
const homePage = readFileSync('./music project/index.html')
const homeStyle = readFileSync("./music project/style.css");
const homeMain = readFileSync("./music project/main.js");


const server = http.createServer((req, res) => {
	console.log(req.method);
	console.log(req.url);
	const url = req.url
	if (url === '/') {
		//home page
		res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
	} else if(url === '/about'){
		//about
		res.writeHead(200, { 'content-type': 'text/html' })
	res.write('<h1>about</h1>')
	res.end()
	}
		//styles
	else if (url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  }
  //main
  else if (url === "/main.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeMain);
    res.end();
  } else {
    //404
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>error page</h1>");
    res.end();
  }
	
})
server.listen(5000)
//content-type for image is 'image/svg+xml'
//content-type for javascript is 'text/javascript'