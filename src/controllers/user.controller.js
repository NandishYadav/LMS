import { userService } from "../services/user.service.js";


    async function createUser(req, res, next) {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }

    async function getUsers(req, res, next) {
        try {
            const page = req.query.page || 1;
            const limit = req.query.limit || 10;
            const users = await userService.getUsers(page, limit);
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    };

    async function getUserById(req, res, next) {
        try {
            const user = await userService.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    };

    async function updateUserById(req, res, next) {
        try {
            const user = await userService.updateUser(req.params.id, req.body);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    };

    async function deleteUserById(req, res, next) {
        try {
            const user = await userService.deleteUser(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    };

    async function login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await userService.login(email, password);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    };

export const userController = {
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    login
}