import express from 'express';

export const usersRoutes = () => {
    const router = express.Router();

    router.post('/users', () => console.log('rotta users'));

    return router;
};
