async function deleteItem(req,res){
    db = global.supabase
    const itemDetails = JSON.parse(req.query.item)
   console.log(itemDetails)
    let data
    try{
        var cat = await db.from('item_category')
        .delete().eq('item_id',itemDetails.item_id)
        
        var item = await db.from('item')
        .delete().eq('item_id',itemDetails.item_id)
        

        console.log(item)
    }
    catch(err){
        console.log(err)
        data=[{},{'success':false}]
    }
    if(item.data.length>0){
        data = [{...item.data},{'success':true}]
        console.log(data)
    }else{
        data=[{},{'success':false}]
    }

    res.send(data)
}
module.exports=deleteItem