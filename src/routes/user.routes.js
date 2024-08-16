import express from "express";
import {userController} from "./../controllers/user.controller.js";
import authenticate from "./../middlewares/authenticate.js";

const router = express.Router();

//Post request to create a new user
router.post('/',userController.createUser);

//Post request to get all users with pagination
router.post('/all',authenticate, userController.getUsers);

//Get request to get a user by id
router.get('/:id',authenticate, userController.getUserById);

//Put request to update a user by id
router.put('/:id',authenticate, userController.updateUserById);

//Delete request to delete a user by id
router.delete('/:id', authenticate,userController.deleteUserById);

//Login user
router.post('/login', userController.login);

export default router;

