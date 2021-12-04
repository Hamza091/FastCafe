
async function Login (req,res){

    // taking one connection from pool
    db = global.supabase
    
    const loginCredentials = JSON.parse(req.query[0])
    const tableName = loginCredentials.admin?'admin':'cafeterian' 
    let data //data to be send will be stored in this
    try{
        var user = await db.from(tableName).select(`*`).match({email:loginCredentials.email,password:loginCredentials.password}).limit(1)
        // console.log(user)
    }
    catch(err){
        console.log(err)
        data = {'success':false}
    }
        
    if(user.data.length>0){
        data = {...user.data[0],'success':true,'admin':loginCredentials.admin}
       console.log(data)
    }else{
        data = {'success':false}
    }

    res.send(data)

}

module.exports=Login