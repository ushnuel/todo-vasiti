import express, { urlencoded, json } from 'express';
import cors from 'cors';
import Route from './todoRoute';
import ErrorHandler from './Helpers/feedback';

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use(cors());
app.use(Route);
app.use(ErrorHandler.error);

const port = process.env.PORT || 5000;
app.set('port', port);
app.listen(() => {
  'Server has started on port ', port;
});

export default app;
