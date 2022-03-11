import 'reflect-metadata';
import express from 'express';
import './database/connect';
import 'express-async-errors';

import cors from './middlewares/cors';
import errorHandler from './middlewares/errorHandler';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3333, () => console.log('Server started at http://localhost:3333'));
