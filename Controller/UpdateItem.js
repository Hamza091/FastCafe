async function updateItem(req,res){
    db = global.supabase
    const itemDetails = req.body
    let data
    try{
        var item = await db.from('items').update([{iname:itemDetails.iname,price:itemDetails.price,quantity:itemDetails.quantity}]).match({
            iname:itemDetails.iname
        })
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
module.exports=updateItem