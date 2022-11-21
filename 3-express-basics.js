const express = require('express')
const app = express()
//which is also same as
// const app = require('express')()

//app.get
app.get('/',(req, res)=> {
	res.status(200).send('hello')
})
app.get("/about", (req, res) => {
  res.send("about");
});
// app.all("*", (req, res) => {
//   res.send("<h1>resources not found</h1>");
// });
app.all("*", (req, res) => {
  res.status(404).send("<h1>resources not found</h1>");
});
//you can rely on express for status code or you can put it yourself with the res.status().send()


//ex of app.listen
app.listen(5000, () => {
	console.log('listened');
})
//express methods
// app.get, Read data
// app.post, Insert data
// app.put, Update data
// app.all
// app.delete, Delete data
// app.use
// app.listen