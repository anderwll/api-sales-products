import express, { Express } from 'express';

export const setupRoutes = (app: Express) => {
    app.get('/', (req, res) => res.status(200).json('API is runnig...'));
    //   app.use(userRoutes());
};
