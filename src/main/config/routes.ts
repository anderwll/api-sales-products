import express, { Express } from 'express';
import { usersRoutes } from '../../app/features/users/presentation/routes/user.routes';

export const setupRoutes = (app: Express) => {
    app.get('/', (req, res) => res.status(200).json('API is runnig...'));
    app.use(usersRoutes());
};
