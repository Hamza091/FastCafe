async function updateCafetarian(req,res){
    db = global.supabase
    const cafetarianDetails = JSON.parse(req.body.cafetarian)
    let data
    try{
        var cafetarian = await db.from('cafeterian')
        .update({
            password:cafetarianDetails.password,
            fname:cafetarianDetails.fname,
            lname:cafetarianDetails.lname,
            dob:cafetarianDetails.dob,
            salary:cafetarianDetails.salary,
        })
        .eq(
            'email',cafetarianDetails.email
        )
        console.log(cafetarian)
    }
    catch(err){
        console.log(err)
        data=[{},{'success':false}]
    }
    if(cafetarian.data.length>0){
        data = [{...cafetarian.data[0]},{'success':true}]
        console.log(data)
    }else{
        data = [{},{'success':false}]
    }

    res.send(data)

}
module.exports = updateCafetarian