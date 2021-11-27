async function updateCafetarian(req,res){
    db = global.supabase
    const cafetarianDetails = req.body
    let data
    try{
        var cafetarian = await db.from('item')
        .update({
            password:cafetarianDetails.password,
            fname:cafetarianDetails.fname,
            lname:cafetarianDetails.lname,
            dob:cafetarianDetails.dob,
            salary:cafetarianDetails.salary,
            hire_date:cafetarianDetails.hire_date,
            registered_by:cafetarianDetails.registered_by
        })
        .eq(
            'email',cafetarainDetails.email
        )
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
module.exports = updateCafetarian