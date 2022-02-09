
import { getConnection, getRepository,Connection } from "typeorm";
import { Loja } from "../database/entity/loja";


export default async()=> await getConnection().getRepository(Loja).find()