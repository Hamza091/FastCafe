async function updateOrderStatus(req,res){
    db = global.supabase
    const orders = JSON.parse(req.body.order)
    console.log(orders)
    let data
    try{
        
        var uorders = await db.from('orders')
        .update({status:orders.status})
        .eq(
            'order_id',orders.order_id
        )
        console.log(uorders)
        
    }
    catch(err){
        console.log(err)
        data=[[],{'success':false}]
        res.send(data)
    }
        
    data = [[...uorders.data],{'success':true}]
    console.log(data)
    

    res.send(data)

}
module.exports = updateOrderStatus