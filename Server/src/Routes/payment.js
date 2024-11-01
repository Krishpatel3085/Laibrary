const express = require('express');
const { verifyPayment, createPayorder, getAllPayment } = require('../Controlers/payment');
const PaymentRouter = express.Router();


PaymentRouter.post('/createPayment', createPayorder);
PaymentRouter.post('/verifyPayment', verifyPayment);
PaymentRouter.get('/getPayment', getAllPayment);


module.exports = { PaymentRouter };

