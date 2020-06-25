import createError from 'http-errors';
import { isEmpty } from 'lodash';
import db from '../../models';

export default [
  async (req, res, next) => {
    const { user: User } = db.models;
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);

      if (!user) {
        throw createError(404);
      }

      req.obj = user;
      next();
    } catch (error) {
      next(error);
    }
  },
  (req, res, next) => {
    if (isEmpty(req.body)) {
      next(createError(400));
      return;
    }

    next();
  },
  async (req, res, next) => {
    try {
      await req.obj.update(req.body);

      res.send(req.obj);
    } catch (error) {
      next(error);
    }
  },
];
