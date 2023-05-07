import express from 'express';
import { OrderController } from '../controllers';
import { auth } from '../../../../shared/presentation/middlewares';
import { createOrderValidator } from '../middlewares/create-order-validator.middleware';

export const ordersRoutes = () => {
    const router = express.Router();

    const orderController = new OrderController();

    router.post('/orders', auth, createOrderValidator, orderController.createOrder);

    return router;
};
