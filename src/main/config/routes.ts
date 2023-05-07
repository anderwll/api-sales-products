import express, { Express } from 'express';
import { initialPage } from './initial-page';
import { usersRoutes } from '../../app/features/users/presentation/routes/user.routes';
import { loginRoutes } from '../../app/features/authentication/presentation/routes/auth.routes';
import { clientsRoutes } from '../../app/features/clients/presentation/routes/client.routes';
import { productRoutes } from '../../app/features/products/presentation/routes/product.routes';

export const setupRoutes = (app: Express) => {
    app.get('/', (req, res) => res.status(200).send(initialPage));
    app.use(loginRoutes());
    app.use(usersRoutes());
    app.use(clientsRoutes());
    app.use(productRoutes());
};
