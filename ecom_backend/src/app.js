const express = require('express');
const cors=require('cors')
const userRouter = require('./routes/user.route.js');

const productRouter = require('./routes/product.route.js');
const cartRouter = require('./routes/cart.route.js');
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: './src/config/.env',
  });
}

const app = express();
const cookieParser = require('cookie-parser'); 
app.use(express.json());
app.use(cors())
app.use(cookieParser());
app.use('/cart', cartRouter);
app.get('/', (req, res) => {
  return res.send('Welcome to backend');
});

app.use('/user', userRouter);
app.use('/product', productRouter);

module.exports = app;