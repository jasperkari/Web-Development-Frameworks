
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const product = require('./product.json')

app.use(bodyParser.json())

let productIdaccumulator

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/product', (req, res) => {
    res.json(product)
  })

app.get('/product/:id', (req, res) => {
    res.json(product)
})

app.post('/product', (req, res) => {
    productIdaccumulator++
    product.push({
        id: productIdaccumulator,
        name: reg.body.name,
        manufacturer: reg.body.manufacturer,
        category: reg.body.category,
        description: reg.body.description,
        price: reg.body.price
    })    
})

app.put('/product/:id', (req, res) => {
    
})

app.get('/user', (req, res) => {
  res.send('user')
})

app.post('/user', (req, res) => {
  
})

app.get('/invoice', (req, res) => {
  res.send('invoice')
})

app.get('/invoice/:id', (req, res) => {
  res.send('invoice')
})

app.delete('/invoice/:id', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
