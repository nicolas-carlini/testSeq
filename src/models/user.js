import { Model } from 'sequelize';

class user extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        firstName: {
          type: DataTypes.STRING(64),
          allowNull: false,
          validate: {
            len: [1, 64],
          },
        },
        lastName: {
          type: DataTypes.STRING(64),
          allowNull: false,
          validate: {
            len: [1, 64],
          },
        },
        fullName: {
          type: DataTypes.VIRTUAL,
          get() {
            return `${this.firstName} ${this.lastName}`;
          },
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
          validate: {
            isEmail: true,
          },
        },
      },
      {
        sequelize,
      },
    );
  }
}

export default user;
