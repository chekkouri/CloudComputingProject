'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    
    User.hasOne(sequelize.define('Address'));
    User.hasMany(sequelize.define('Post'));
  };
  return User;
};