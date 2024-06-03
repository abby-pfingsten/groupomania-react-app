"use strict"
const { Model } = require("sequelize")
const { Sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      media: { type: DataTypes.STRING, allowNull: true },
      usersRead: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  )

  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    })
  }

  return Post
}
