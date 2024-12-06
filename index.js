const exp = require ('express')
const app = exp()

const port = 8000 

app.get('/',(req,res)=>{
let user = {
    firsname : 'หมา',
    lastname : 'โง่',
    age : 50,
    gender : 'male',
}


})

app.listen(port,(req,res)=>{
    console.log("online")
})
