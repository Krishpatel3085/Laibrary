const express = require('express');
const Order = require("../Model/order");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());


const checkout = async (req, res) => {
    const User = req.user["id"];
    const userName = req.user["username"];

    console.log(User)
    const { title, author, quantity, price, imageUrl, username } = req.body;
    const totalAmount = quantity * price; // Calculate total amount based on quantity and price

    try {
        // Check if the order already exists
        const existingOrder = await Order.findOne({ title, author, username });

        if (existingOrder) {
            existingOrder.quantity += quantity;
            existingOrder.totalAmount = existingOrder.quantity * price;
            await existingOrder.save();
            res.status(200).json({ message: 'Order updated successfully', order: existingOrder });
        } else {
            const newOrder = await Order.create({ title, author, quantity, price, totalAmount, imageUrl, username: userName, User });
            res.status(201).json({ message: 'Order processed successfully', order: newOrder });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteOrder = async (req, res) => {
    const id = req.params.id;
    try {
        const order = await Order.findOne({ _id: id });

        await Order.deleteOne({ _id: id });
        res.json({ Msg: "Delete Successfully" });
    }
    catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getOrder = async (req, res) => {
    try {
        const orders = await Order.find(); // Use 'orders' instead of 'order'
        res.json(orders); // Return the correct variable
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateOrder = async (req, res) => {
    try {
        const itemId = req.params.id;
        const { quantity } = req.body

        const cartItem = await cart.findOne({ _id: itemId });

        if (cartItem) {
            cartItem.quantity = quantity;
            await cartItem.save();
            res.json({ message: 'Order updated successfully', order: cartItem });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getOrder, checkout, deleteOrder, updateOrder }