async function deleteItem(req,res){
    db = global.supabase
    const itemDetails = JSON.parse(req.body.item_id)
   console.log(itemDetails)
    let data
    try{
        // var cat = await db.from('item_category')
        // .delete().eq('item_id',itemDetails.item_id)
        
        // var item = await db.from('item')
        // .delete().eq('item_id',itemDetails.item_id)
        
        var item = await db.from('item')
        .update({available_qty:0})
        .eq(
            'item_id',itemDetails.item_id
        )

    }
    catch(err){
        console.log(err)
        data=[{},{'success':false}]
    }
    if(item.data.length>0){
        data = [{...item.data[0]},{'success':true}]
        console.log(data)
    }else{
        data=[{},{'success':false}]
    }

    res.send(data)
}
module.exports=deleteItem