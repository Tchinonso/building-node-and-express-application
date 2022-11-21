const express = require('express')
const app = express()
const logger = require('./logger-middleware')
const authorize = require('./authorize')
//req=> middleware=> res

//instead of adding logger manually to all function you can use app.use(logger)
app.use([logger,authorize])
//put all your middleware functions first at the top before your route method like get post

app.get("/",  (req, res) => {
  res.send("home");
});
app.get("/about",  (req, res) => {
  res.send("about");
});
app.get("/api/products",  (req, res) => {
  res.send("products");
});
app.get("/api/items",  (req, res) => {
	res.send("items");
	console.log(req.user);
});

// app.get('/',logger, (req, res) => {
	
// 	res.send('home')
// })
// app.get("/about",logger, (req, res) => {
//   res.send("about");
// });
// app.get("/api/products", logger, (req, res) => {
//   res.send("products");
// });
// app.get("/api/items", logger, (req, res) => {
//   res.send("items");
// });


app.listen(5000, () => {
	console.log('app is listening');
})