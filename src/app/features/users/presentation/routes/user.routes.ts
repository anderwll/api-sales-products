import express from 'express';
import { UserController } from '../controllers/user.controller';
import { createUserValidator } from '../middlewares/create-user-validator.middleware';
import { existUserValidator } from '../middlewares/exist-user-validator.meddleware';

export const usersRoutes = () => {
    const router = express.Router();

    const userController = new UserController();

    router.post('/users', existUserValidator, createUserValidator, userController.createUser);

    return router;
};
