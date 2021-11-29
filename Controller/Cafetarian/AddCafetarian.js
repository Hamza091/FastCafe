async function addCafetarian(req,res){
    db = global.supabase
    console.log(req.body)
    const cafetarianDetails = JSON.parse(req.body.cafetarian)
    let data
    try{
        var cafetarian = await db.from('cafetarian').insert([{
            email:cafetarianDetails.email,
            password:cafetarianDetails.password,
            fname:cafetarianDetails.fname,
            lname:cafetarianDetails.lname,
            dob:cafetarianDetails.dob,
            salary:cafetarianDetails.salary,
            hire_date:cafetarianDetails.hire_date,
            registered_by:cafetarianDetails.registered_by
        }])
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
module.exports = addCafetarian