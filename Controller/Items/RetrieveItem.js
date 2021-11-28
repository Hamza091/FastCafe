async function retrieveItem(req,res){
    db = global.supabase
    let data
    try{
        var items = await db.from('item').select('*')
        
    }
    catch(err){
        console.log(err)
        data=[[],{'success':false}]
        res.send(data)
    }
        
    data = [[...items.data],{'success':true}]
    console.log(data)
    

    res.send(data)

}
module.exports = retrieveItem