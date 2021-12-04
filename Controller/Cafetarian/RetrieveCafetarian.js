async function retrieveCafetarian(req,res){
    db = global.supabase
    let data
    try{
        var cafetarians = await db.from('cafeterian').select('*')
    }
    catch(err){
        console.log(err)
        data=[[],{'success':false}]
        res.send(data)
    }
        
    data = [[...cafetarians.data],{'success':true}]
    console.log(data)
    
    res.send(data)

}
module.exports = retrieveCafetarian