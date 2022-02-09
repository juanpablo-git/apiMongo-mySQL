import connect from "../../database/connect"

const catalogSchema = new connect.Schema({
    name:String,
    img:String
 })

export const catalog = connect.model("catalog",catalogSchema)


