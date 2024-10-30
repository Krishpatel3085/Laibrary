const express = require('express');
const { verifyPayment, createPayorder } = require('../Controlers/payment');
const PaymentRouter = express.Router();


PaymentRouter.post('/createPayment', createPayorder);
PaymentRouter.post('/verifyPayment', verifyPayment);


module.exports = { PaymentRouter };

