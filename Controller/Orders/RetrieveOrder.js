async function retrieveOrder(req,res){
    db = global.supabase
    let data
    try{
        
        var orders = await db.from('orders').select(`*,students(*),order_items(*),item(*)`)
        console.log(orders)
        
        
    }
    catch(err){
        console.log(err)
        data=[[],{'success':false}]
        res.send(data)
    }
        
    data = [[...orders.data],{'success':true}]
    console.log(data)
    

    res.send(data)

}
module.exports = retrieveOrder