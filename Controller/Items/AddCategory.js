async function addCategory(req,res){
    db = global.supabase
    console.log(req.body)
    const categoryDetails = JSON.parse(req.body.category)
    let data
    try{
        var cat = await db.from('category').insert([{cat_name:categoryDetails.cat_name}])
        console.log(cat)
            // {
                //{cat_name:"abc"}
            // }
       
    }
    catch(err){
        console.log(err)
        data=[{},{'success':false}]
    }
    if(cat.data.length>0){
        data = [{...cat.data[0]},{'success':true}]
        console.log(data)
    }else{
        data = [{},{'success':false}]
    }

    res.send(data)

}
module.exports = addCategory