const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
	//res.json(products)
	res.send('<h1>home</h1><a href = "/api/products">products</a>')
})

//this method is for getting a single item
app.get('/api/products/:productId', (req, res) => {
	// console.log(req);
	// console.log(req.params);
	// const singleProduct = products.find((product) => product.id === 1)
	const { productId } = req.params
	
	const singleProduct = products.find((product) => product.id === Number(productId));
	if (!singleProduct) {
		return res.status(404).send('NOT FOUND')
	}
	

	//res.json(singleProduct)
	return res.json(singleProduct);
})

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  res.send("hello bro");
});

app.get("/api/v1/query", (req, res) => {
  //console.log(req.query);
	const { search, limit } = req.query;
	let sortedProducts = [...products]

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search)
		})
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0,Number(limit))
	}
	if (sortedProducts.length < 1) {
		//res.status(200).send('no match')
		return res.status(200).json({succes:true,data:[]})
	}
	res.status(200).json(sortedProducts)
  res.send("hello bro");
});

// this method is for all items
// app.get('/api/products', (req, res) => {
// 	const newProducts = products.map((product) => {
// 		const { id, name, image } = product;
// 		return { id, name, image };
// 	})
// 	res.json(newProducts)
// })


app.listen(5000, () => {
	console.log("listening....");
})