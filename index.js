
const express=require("express")

const app=express()
require("dotenv").config()

const cors=require("cors")
const {connection,todoModel}=require("./database/connect")
const validator=require("./middleWare/validator")


// const { MongoClient } = require('mongodb');

// const uri = process.env.mongoUrl;
// const client = new MongoClient(uri);


app.use(express.json())
app.use(cors())

app.get("/todos",async(req,res)=>{
    const data = await todoModel.find()
    res.send(data)
})


app.post("/addtodos",validator,async(req,res)=>{

    const data=new todoModel(req.body)
    await data.save()
    
    res.send("todo is added successfully")

})


app.delete("/delete/:id",async(req,res)=>{

    try{
        const id=req.params.id

        const data=await todoModel.findByIdAndDelete({_id:id})
        res.send("todo is successfully delete")
    }
    catch(err)
    {
        res.send(err)
    }
    

})


app.get("/update/:id",async(req,res)=>{

    const data=await todoModel.findById({_id:req.params.id})
    
    data.isComplete=!data.isComplete
    

    data.save()

    res.send(data)

})


const PORT=process.env.PORT

app.listen(PORT,async()=>{
    try{
        await connection
        
    }
    catch(err)
    {
        console.group(err)
    }
    console.log(`server is runing on ${PORT}`)
})




// client.connect(err => {
//     if(err){ console.error(err); return false;}
//     // connection to mongo is successful, listen for requests
//     app.listen(PORT, () => {
//         console.log("listening for requests");
//     })
// });