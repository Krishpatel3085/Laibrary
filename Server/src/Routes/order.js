const express = require('express');
const { checkout, getOrder ,deleteOrder ,updateOrder} = require("../Controlers/order"); // Ensure the correct path to your controllers

const orderRouter = express.Router();




orderRouter.post('/order', checkout);
orderRouter.delete('/orderDelete/:id', deleteOrder);
orderRouter.get('/getorder', getOrder); // Change to GET request
orderRouter.put('/updateOrder/:id', updateOrder); 

module.exports = { orderRouter };