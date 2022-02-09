import "reflect-metadata";
import {GraphQLServer} from "graphql-yoga"
import { verifica } from "./app/middwers"
import { context } from "./app/context"
import { resolvers } from "./app/resolvers"
import { typeDefs } from "./app/typeDefs"




const middlewares:any = [verifica]

const server = new GraphQLServer({context,middlewares,resolvers,typeDefs})

server.start(()=>console.log("server rodeando na pporta 3000"))