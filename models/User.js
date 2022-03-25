const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
User.init({
    id:{type:DataTypes.NUMBER,
    primaryKey:true} ,
  name: DataTypes.STRING,
  email:{
      type:DataTypes.STRING,
      unique:true
},
  passwordHash:DataTypes.STRING,
}, { sequelize, modelName: 'user' });

sequelize.sync()
  .then(() => User.create({
    
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });
  module.exports =User;