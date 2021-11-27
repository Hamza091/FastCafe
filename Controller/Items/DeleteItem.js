async function deleteItem(req,res){
    db = global.supabase
    const itemDetails = req.body
    let data
    try{
        var item = await db.from('item')
        .delete().match({item_id:itemDetails.item_id})
    }
    catch(err){
        console.log(err)
        data={'success':false}
    }
    if(item.data.length>0){
        data = {...item.data,'success':true}
        console.log(data)
    }else{
        data = {'success':false}
    }

    res.send(data)
}
module.exports=deleteItem