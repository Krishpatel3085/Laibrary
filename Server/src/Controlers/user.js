const express = require("express");
const Users = require("../Model/user");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) return res.status(401).json({ message: "Access denied, no token provided" });

    jwt.verify(token, "your_secret_key", (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.user = user;
        next();
    });
};

// Create User
const createUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password, username } = req.body;
        if (!firstname || !lastname || !email || !password || !username) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }
        await Users.create({ firstname, lastname, email, password, username });
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Can't Create User ", error);
        res.status(400).json({ message: error.message });
    }
};

// Get All Users (Protected)
const getUSer = async (req, res) => {
    try {
        const user = await Users.find();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login User and Generate Token
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ userId: user._id, email: user.email }, "your_secret_key", { expiresIn: "1h" });
        res.json({ token, userId: user._id, username: user.username });
    } catch (error) {
        console.error("Can't Login User ", error);
        res.status(500).json({ message: error.message });
    }
};

app.get('/users', authenticateToken, getUSer);

module.exports = { getUSer, loginUser, createUser };
