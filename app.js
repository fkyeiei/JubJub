app.put('/user/:id',(req,ret)=>{
    let id req.params.id 
    let updateuser = req.body 

    //หา user จาก id ที่ส่งมา
    let selecetindex = users.findIndex(user.id == id)
    
    //update user นั้น 
    users[selecetindex].firstname = updateuser.firstname 
    users[selecetindex].lastname = updateuser.lastname 
    users[selecetindex].age = updateuser.age 
    users[selecetindex].gender = updateuser.gender 
    
    resizeBy.json({
        masage : 'update complate !!'
        data : {
            user :
        }
    })
}
)