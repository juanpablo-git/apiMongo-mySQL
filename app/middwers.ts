
export async function verifica(root:any, args:any, context:any, info:any,next:any){
    if(info.token){
        console.log("Verifica")
        return await root()
    }else{
    if(context){

        return await root()
    }
            return[]
    }
}
