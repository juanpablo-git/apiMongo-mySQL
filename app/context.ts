export function context (req:any,res:any){
    return {token:req.request.header('autorization')}
}