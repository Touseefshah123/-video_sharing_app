import express from 'express';
import User from '../Models/User.js';
import bcrypt from 'bcrypt';
import { createError } from '../CreateError.js';
import jwt from 'jsonwebtoken'
const signUp = async (req, res, next) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); // Use bcrypt.hash for async operation
    const newUser = new User({ ...req.body, password: hashedPassword });
    await newUser.save();
    res.status(200).send("Data sent successfully");
  } catch (err) {
    next(createError(404, "Not Found duplicate or any other error"));
  }
};

const signIn = async (req, res, next) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ name });

    if (!user) {
      return next(createError(404, "User not found"));
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return next(createError(401, "Invalid password"));
    }

    const token = jwt.sign({ id: user._id }, process.env.secret_key);
    // Filter out the password field from the user object
    const { password: _, ...userData } = user.toObject();

    res.cookie("access_token", token, { httpOnly: true }).status(200).json(userData);
  } catch (error) {
    next(createError(500, "Internal Server Error"));
  }
};

export default signUp;
export {signIn};
