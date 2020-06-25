import createError from 'http-errors';
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

      res.send(user);
    } catch (error) {
      next(error);
    }
  },
];
