export const typeDefs = `
 type Query {
   products:[Product!]!
  login(name:String,email:String):[Login]
 }
 type Product {
   id:String!,
   name:String!,
   img:String!
 }
 type Login{
   name:String
   token:String
 }

 
`
