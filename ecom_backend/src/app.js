const express = require('express');
const cors=require('cors')
const userRouter = require('./routes/user.route.js');

const productRouter = require('./routes/product.route.js');
const cartRouter = require('./routes/cart.route.js');
const OrderRouter = require('./routes/order.route.js');
const PaymentRouter= require('./routes/Payment.route.js')
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
app.use('/cart', cartRouter);
app.use('/orders', OrderRouter);
app.use('/payment', PaymentRouter);
module.exports = app;

