import cors from './cors';
import database from './database';

const env = process.env.EXPRESS_STAGE || 'development';

export default {
  cors: cors[env],
  database: database[env],
};
