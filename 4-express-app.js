const express = require('express')
const path = require('path')
const app = express()

//set up static and middleware
app.use(express.static('./musik'))

//app.get('/', (req,res) => {
	//res.sendFile(path.resolve(__dirname, './music project/index.html'))
	//you need to put it as res.sendFile(path.resolve or path.join(__dirname, then your folder directory))
	//you can also add index html into the static object folder like the musik and everything works
//})

app.all('*', (req,res) => {
	res.send('not found')
})

app.listen(5000, () => {
	console.log('listening at port 5000......');
})