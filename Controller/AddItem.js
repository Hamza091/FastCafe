async function addItem(req,res){
    db = global.supabase
    const itemDetails = req.body
    let data
    try{
        var item = await db.from('items').insert([{iname:itemDetails.iname,price:itemDetails.price,quantity:itemDetails.quantity}])
    }
    catch(err){
        console.log(err)
        data={'success':false}
    }
    if(item.data.length>0){
        data = {...item.data[0],'success':true}
        console.log(data)
    }else{
        data = {'success':false}
    }

    res.send(data)

}
module.exports = addItem