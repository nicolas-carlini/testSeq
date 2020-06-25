import db from '../../models';

export default [
  async (req, res, next) => {
    const { user: User } = db.models;

    console.log(req.body);
    const { firstName, lastName, email } = req.body;
    const user = User.build({
      firstName,
      lastName,
      email,
    });

    try {
      const newUser = await user.save();

      res.send(newUser);
    } catch (error) {
      next(error);
    }
  },
];
