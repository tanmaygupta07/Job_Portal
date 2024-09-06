import express from 'express'
import UserController from '../controllers/user.controller.js'

const userController = new UserController();

const router = express.Router();

router.post('/register', userController.addUser);
router.get('/login', userController.getLogin);
router.post('/login', userController.userLogin);
router.get('/logout', userController.userLogout);

export default router;