const Users = require("../Model/user");
const jwt = require("jsonwebtoken");
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


// Get one Users (Protected)
const get1USer = async (req, res) => {
    try {
        const id = req.params["id"]
        const user = await Users.findOne({ _id: id });
        res.json(user);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: error.message });
    }
};

// Login User and Generate Token
const loginUser = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        if ((!email && !username) || !password) {
            return res.status(400).json({ message: "USername , Email and password are required" });
        }
        const user = await Users.findOne({
            $or: [{ email }, { username }]
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        };

        console.log("Generated token data:", tokenData);
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json(
            {
                message: "User logged in successfully",
                user: {
                    token,
                    id: user._id,
                    username: user.username,
                    email: user.email,
                }
            }
        )
    } catch (error) {
        console.error("Can't Login User ", error);
        res.status(500).json({ message: error.message });
    }
};


const deleteUser = async (req, res) => {
    const id = req.params["id"]
    console.log(id)
    try {
        // Find the book first
        const user = await Users.findOne({ _id: id });
        if (!user) {
            return res.status(404).json({ Msg: "User not found" });
        }

        console.log('Requesting user ID:', req.user.id);
        console.log("User checking", req.user)
        const isAdmin = req.user.role === 'admin';

        console.log('Admin is Checking:', isAdmin);
        if (!isAdmin) {
            return res.status(403).json({ error: "Forbidden: You do not have permission to Delete this User." });
        }

        await Users.deleteOne({ _id: id });
        res.json({ Msg: "Delete Successfully" });

    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getUSer, loginUser, createUser, get1USer, deleteUser };
