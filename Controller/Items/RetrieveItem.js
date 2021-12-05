async function retrieveItem(req,res){
    db = global.supabase
    let data
    try{
        //var items = await db.from('item').select('*')
         var items = await db.from('item').select(`*,item_category(cat_id,item_id),category(cat_id,cat_name)`)
        //  var items_cat = await db.from('item_category').select('*')
        // console.log(items_cat)
         //var category.eq('item_category.cat_id','category.cat_id')
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
module.exports = retrieveItem