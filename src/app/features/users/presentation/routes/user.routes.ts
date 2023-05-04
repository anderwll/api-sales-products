import express from 'express';
import { UserController } from '../controllers/user.controller';

export const usersRoutes = () => {
    const router = express.Router();

    const userController = new UserController();

    router.post('/users', userController.createUser);

    return router;
};
