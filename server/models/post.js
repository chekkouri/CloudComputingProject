'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    
    Post.belongsToMany(models.Category, {through: 'PostCategory'});
    Post.belongsTo(models.User);
  };
  return Post;
};
