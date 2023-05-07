import express from 'express';
import { ClientController } from '../controllers/client.controller';
import { auth } from '../../../../shared/presentation/middlewares';
import { createClientValidator } from '../middlewares/create-client-validator.middleware';

export const clientsRoutes = () => {
    const router = express.Router();

    const clientController = new ClientController();

    router.post('/clients', auth, createClientValidator, clientController.createClient);

    return router;
};
