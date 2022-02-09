import { catalog } from "./models/catalog";

export default async () => {

     return await  catalog.find()
}