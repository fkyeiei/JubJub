const exp = require ('express')
const app = exp()
const bodyparser = require('body-parser')

app.use(bodyparser.json()) // มาแบบ text

const port = 8000 


// path = /
app.get('/',(req,res)=>{
let user = {
    firsname : 'หมา',
    lastname : 'โง่',
    age : 50,
    gender : 'male',
}
res.json(user)

})

app.port('/user',(req,res)=>{
    let user = req.body

    users.push(user)

    res.json({
        message : 'add complete'
    })
})

app.listen(port,(req,res)=>{
    console.log("online")
})