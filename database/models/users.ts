import {sequelize} from "../connectSQL";
import {Sequelize,DataTypes} from 'sequelize'

export const User = sequelize.define('loja',{
    name:DataTypes.STRING,
    email:DataTypes.STRING
},{freezeTableName:true})


