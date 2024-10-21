const Users_Admin = require("../Model/Admin");
const jwt = require("jsonwebtoken");


// Create User
const createAdmin = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await Users_Admin.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }
        await Users_Admin.create({ email, password, username });
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Can't Create User ", error);
        res.status(400).json({ message: error.message });
    }
};

// Get All Users (Protected)
const getAdmin = async (req, res) => {
    try {
        const user = await Users_Admin.find();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login User and Generate Token
const loginAdmin = async (req, res) => {
    try {

        const { identifier, password } = req.body;
        const user = await Users_Admin.findOne({
            $or: [{ email: identifier }, { username: identifier }],
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        console.log("data")

        const tokenData = { id: user._id, username: user.username, email: user.email ,role: user.role };
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({
            token: token,
            id: user._id,
            username: user.username,
            role: user.role
        });
    } catch (error) {
        console.error("Can't Login User ", error);
        res.status(500).json({ message: error.message });
    }
};


module.exports = { getAdmin, loginAdmin, createAdmin };
