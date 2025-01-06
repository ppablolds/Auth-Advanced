//Import Packages
import express from 'express';

//Import Controllers
import { login, logout, signup } from '../controllers/auth.controller.js';

//Create Router
const router = express.Router();


//Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);


//Export Router
export default router;