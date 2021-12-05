async function retrieveCategory(req,res){
    db = global.supabase
    let data
    try{
        var cats = await db.from('category').select('*')
    }
    catch(err){
        console.log(err)
        data=[[],{'success':false}]
        res.send(data)
    }
        
    data = [[...cats.data],{'success':true}]
    console.log(data)
    
    res.send(data)

}
module.exports = retrieveCategory