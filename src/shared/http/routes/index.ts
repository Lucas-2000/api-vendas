import productsRouter from '@modules/products/routes/products.route';
import usersRouter from '@modules/users/routes/users.route';
import sessionsRouter from '@modules/users/routes/sessions.route';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
