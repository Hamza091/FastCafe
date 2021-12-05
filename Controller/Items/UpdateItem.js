async function updateItem(req,res){
    db = global.supabase
    const itemDetails = JSON.parse(req.body.item)
    let data
    try{
        var item = await db.from('item')
        .update({iname:itemDetails.iname,price:itemDetails.price,available_qty:itemDetails.available_qty})
        .eq(
            'item_id',itemDetails.item_id
        )
        if(itemDetails.item_category.length>0){
            const id = itemDetails.item_id
            
            var cat = await db.from('item_category')
            .delete().eq('item_id',id)
        
            let itm_category = []
            for(i=0;i<itemDetails.item_category.length;i++){
                itm_category = [...itm_category,{"cat_id":itemDetails.item_category[i].cat_id,"item_id":id}]
            }
            cat = await db.from('item_category').insert(itm_category)
           
        }
    }
    catch(err){
        console.log(err)
        data=[{},{'success':false}]
    }
    if(item.data.length>0){
        data = [{...itemDetails},{'success':true}]
        console.log(data)
    }else{
        data = [{},{'success':false}]
    }

    res.send(data)
}
module.exports=updateItem