
async function Login (req,res){

    // taking one connection from pool
    db = global.pool
    
    const loginCredentials = JSON.parse(req.query[0])
    const tableName = loginCredentials.admin?'admin':'cafetarian'
    
    let data //data to be send will be stored in this

    try{

        var user = await db.query(`SELECT * FROM ${tableName} where email='${loginCredentials.email}' AND pass='${loginCredentials.password}'`)
    
    }
    catch(err){
        //if query is invalid or table is invalid or connection is lost
        data = {'success':false}
        console.log(err)
        res.send(data)
    }

    // if user exists
    if(user.length>0){
        data = {...user[0][0],'success':true}
        console.log(data)
    }else{
        data = {'success':false}
    }

    res.send(data)

}

module.exports=Login