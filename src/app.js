import express from 'express';
import cors from 'cors';
import createError from 'http-errors';
import logger from 'morgan';

import configs from './config';
import routes from './routes';
import ping from './routes/ping';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors(configs.cors));
app.use('/static', express.static(`${__dirname}/public`));
app.use('/ping', ping);
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

export default app;
