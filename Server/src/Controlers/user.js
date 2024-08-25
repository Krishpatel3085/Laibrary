const express = require("express");
const Users = require("../Model/user");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Create User

const createUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password, username } = req.body;

        // Validate input data
        if (!firstname || !lastname || !email || !password || !username) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the email already exists
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // Create the new user
        await Users.create({
            firstname,
            lastname,
            email,
            password,
            username
        });

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Can't Create User ", error);
        res.status(400).json({ message: error.message });
    }
};



// Get All User
const getUSer = async (req, res) => {
    try {
        const user = await Users.find();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get Single User

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body; 
        // Validataion input data
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        // Find the user by email
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Compare the provided password with the stored password
        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        // Optionally, exclude the password from the response
        const { password: _, ...userData } = user.toObject(); // Exclude the password

        res.json(userData);

    } catch (error) {
        console.error("Can't Login User ", error);
        res.status(500).json({ message: error.message });
    }
};



module.exports = { getUSer, loginUser, createUser, };
