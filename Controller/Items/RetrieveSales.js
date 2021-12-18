async function retrieveSales(req,res){
    db = global.supabase
    let data
    try{
        //var items = await db.from('item').select('*')
        //  var items = await db.from('item').select(`*,item_category(cat_id,item_id),category(cat_id,cat_name)`)
        const items  = await db.rpc('totalItems')
        console.log(items)
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
module.exports = retrieveSales