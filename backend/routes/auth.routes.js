//Import Packages
import express from 'express';

//Import Controllers
import { login, logout, signup, verifyEmail, forgotPassword, resetPassword, checkAuth } from '../controllers/auth.controller.js';

import { verifyToken } from '../middleware/verifyToken.js';

//Create Router
const router = express.Router();


//Routes
router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail)
router.post("/forgot-password", forgotPassword)

router.post("/reset-password/:token", resetPassword)


//Export Router
export default router;