import repositores from "../database/repositores"
import rloja from "../database/returnLoja"
import {User} from '../database/models/users'
import jwt from 'jsonwebtoken'
export const resolvers ={
    Query: {
        products:repositores ,
        login:async(_:any,{name,email}:any)=>{

            const user:any =await User.findAll({attributes:['id','name','email'],where:{name:name ,email:email}})
           if(user[0]){
               var token:any = jwt.sign({token:user[0]},'123456')
             
               
               return [{name:user[0].name,token:token}]
           }else{
               return []
           }
          
           
        } 

    }

}
