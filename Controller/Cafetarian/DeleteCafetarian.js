async function deleteCafetarian(req,res){
    db = global.supabase
    const cafetarianDetails = req.body
    let data
    try{
        var cafetarian = await db.from('cafetarian')
        .delete().match({email:cafetarianDetails.email})
    }
    catch(err){
        console.log(err)
        data={'success':false}
    }
    if(cafetarian.data.length>0){
        data = {...cafetarian.data[0],'success':true}
        console.log(data)
    }else{
        data = {'success':false}
    }

    res.send(data)

}
module.exports = deleteCafetarian