const { Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class UserPreferences extends Model {}
UserPreferences.init({
    id:{type:DataTypes.NUMBER},
    user_id:DataTypes.NUMBER,
    timezone:DataTypes.STRING,
    country:{type:DataTypes.STRING}
   
}, { sequelize, modelName: 'userPreferences' });

// sequelize.sync()
//   .then(() => UserPreferences.create({
    
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });
  module.exports =UserPreferences;