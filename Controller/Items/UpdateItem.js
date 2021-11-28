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
    }
    catch(err){
        console.log(err)
        data=[{},{'success':false}]
    }
    if(item.data.length>0){
        data = [{...item.data[0]},{'success':true}]
        console.log(data)
    }else{
        data = [{},{'success':false}]
    }

    res.send(data)
}
module.exports=updateItem