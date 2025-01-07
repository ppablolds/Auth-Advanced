//Import Packages
import express from 'express';

//Import Controllers
import { login, logout, signup, verifyEmail } from '../controllers/auth.controller.js';
import { verify } from 'crypto';

//Create Router
const router = express.Router();


//Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

//Routes with Verification
router.post("/verify-email", verifyEmail)


//Export Router
export default router;