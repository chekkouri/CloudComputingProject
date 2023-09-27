'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    
    Category.belongsToMany(models.Post, {through: 'PostCategory'});
  };
  return Category;
};