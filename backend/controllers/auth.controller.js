//Import Packages
import bcryptjs from "bcryptjs";

//Import Model
import { User } from "../models/user.model.js";

//Import Utils
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

//Controller for authentication
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      throw new Error("Please fill all fields");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: failed, message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpires: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    await user.save();

    //jwt
    generateTokenAndSetCookie(res, user._id);

    res
      .status(201)
      .json({
        success: true,
        message: "User created successfully",
        user: { ...user._doc, password: undefined },
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  res.send("Login Page");
};

export const logout = async (req, res) => {
  res.send("Logout Page");
};
