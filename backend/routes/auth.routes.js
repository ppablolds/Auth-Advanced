//Import Packages
import express from 'express';

//Import Controllers
import { login, logout, signup } from '../controllers/auth.controller.js';

//Create Router
const router = express.Router();


//Routes
router.get("/signup", signup);
router.get("/login", login);
router.get("/logout", logout);


//Export Router
export default router;