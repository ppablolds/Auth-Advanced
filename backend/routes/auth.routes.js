//Import Packages
import express from 'express';

//Import Controllers
import { login, logout, signup, verifyEmail, forgotPassword, resetPassword } from '../controllers/auth.controller.js';

//Create Router
const router = express.Router();


//Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail)
router.post("/forgot-password", forgotPassword)

router.post("/reset-password/:token", resetPassword)


//Export Router
export default router;