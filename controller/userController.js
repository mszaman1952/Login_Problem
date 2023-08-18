const jwt = require("jsonwebtoken");
const User = require("../model/user");

// user registration 
exports.registrationUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const existUser = await User.findOne({email});
        if(existUser){
            res.status(400).json({
                status : "Failed...",
                message : "User Allready Exists... Please Login"
            })
        }
        const newUser = new User ({
            name,
            email,
            password
        })
        await newUser.save();
        const token = jwt.sign({newUser : email}, process.env.SECRET_KEY, {
            expiresIn : 7 * 24 * 60  * 60 * 1000
        })
        res.status(200).json({
            status : "Success",
            message : "Registration is Successfully.....",
            token
        })
    } catch (error) {
        res.status(400).json({
            status : "Failed...",
            message : error
        })
    }
}

// user login 
exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not registered",
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                message: "Incorrect email or password",
            });
        }

        const showUserData = {
            name: user.name,
            email: user.email,
        };

        res.status(200).json({
            message: "User login successful",
            user: showUserData,
        });
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: error.message,
        });
    }
};