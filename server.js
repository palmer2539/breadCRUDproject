//dependencies
const express = require('express');

//config
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

//middleware
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//routes
app.get('/', (req, res) => {
  res.send("<h1>Welcome to information on Breads!</h1>")
})

//breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//listen
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})