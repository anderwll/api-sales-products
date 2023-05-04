import express from 'express';
import { UserController } from '../controllers/user.controller';
import { createUserValidator } from '../middlewares/create-user-validator.middleware';

export const usersRoutes = () => {
    const router = express.Router();

    const userController = new UserController();

    router.post('/users', createUserValidator, userController.createUser);

    return router;
};
