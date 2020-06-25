import db from '../../models';

export default [
  async (req, res, next) => {
    const { user: User } = db.models;

    try {
      const results = await User.findAndCountAll();

      res.send(results);
    } catch (error) {
      next(error);
    }
  },
];
