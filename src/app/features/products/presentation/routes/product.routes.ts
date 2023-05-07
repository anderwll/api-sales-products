import express from 'express';
import { ProductController } from '../controllers';
import { auth } from '../../../../shared/presentation/middlewares';
import { createProductValidator } from '../middlewares/create-product-validator.middleware';

export const productRoutes = () => {
    const router = express.Router();

    const productController = new ProductController();

    router.post('/products', auth, createProductValidator, productController.createProduct);

    return router;
};
