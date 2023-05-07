import express from 'express';
import { OrderController } from '../controllers';
import { auth } from '../../../../shared/presentation/middlewares';

export const ordersRoutes = () => {
    const router = express.Router();

    const orderController = new OrderController();

    router.post('/orders', auth, orderController.createOrder);

    return router;
};
