async function retrieveCafetarian(req,res){
    db = global.supabase
    let data
    try{
        var cafetarians = await db.from('cafetarian').select('*')
    }
    catch(err){
        console.log(err)
        data={'success':false}
    }
    
    data = {...cafetarians.data,'success':true}
    console.log(data)

    res.send(data)

}
module.exports = retrieveCafetarian