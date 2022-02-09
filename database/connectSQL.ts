import {Sequelize} from "sequelize"
const DATABASE = "loja"
const USERNAME = 'root'
const PASSWORD = ''
export const sequelize  = new Sequelize({dialect:'mysql',host:"localhost",password:PASSWORD,username:USERNAME,database:DATABASE})

