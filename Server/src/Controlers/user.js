const express = require("express");
const Users = require("../Model/user");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Create User

const createUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password,  } = req.body;

        // Validate input data
        if (!firstname || !lastname || !email || !password ) {
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
            // gender
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

        req_body = req.body;

        const email = req_body.email;
        const password = req_body.password;

        const user_data = await Users.findOne({email:email , password:password  })

        if (user_data) {
            res.cookie("login", user_data.email);
            res.json({
                "msg": "login succesfully"
            })
        } else {
            res.json({
                "msg": "login failed"
            })
        }

    } catch (error) {
        console.error("Can't Login User ", error)
        res.status(400).json({ message: error.message });
    }


}


module.exports = { getUSer, loginUser, createUser, };
