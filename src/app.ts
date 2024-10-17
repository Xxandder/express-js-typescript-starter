import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { exceptionHandler } from './libs/middlewares/error-handler.middleware';
import { componentRouter } from './components/components';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(componentRouter)

app.use(exceptionHandler)

export default app;
