async function addItem(req,res){
    db = global.supabase
    console.log(req.body)
    const itemDetails = JSON.parse(req.body.item)
    let data
    try{
        var item = await db.from('item').insert(
            [{iname:itemDetails.iname,price:itemDetails.price,available_qty:itemDetails.available_qty}])
        console.log(item)
            // {
            //     item_id:2,
            //     iname:'check',
            //     item_category:[{cat_id:1,item_id:0},{cat_id:1,item_id:0}]
            // }
            
            if(itemDetails.item_category.length>0){
                const id = item.data[0].item_id
                let itm_category = []
                for(i=0;i<itemDetails.item_category.length;i++){
                    itm_category = [...itm_category,{"cat_id":itemDetails.item_category[i].cat_id,"item_id":id}]
                }
                console.log(itm_category)
                cat = await db.from('item_category').insert(itm_category)
                // itemDetails.item_category.map((itm)=>{
                //     itm.item_id=id
                // })
                
                // console.log("here")
                // console.log(itemDetails)
                // cat = await db.from('item_category').insert(itemDetails.item_category)
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
module.exports = addItem