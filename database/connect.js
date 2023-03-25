
const mongoose=require ("mongoose")
require("dotenv").config()

// const connection = mongoose.connect(process.env.MONGO_URL)
//  mongoose.connect(process.env.MONGO_URL).then(()=>console.log("database connected"))
// .catch((err)=>console.log(err))





mongoose.set('strictQuery', true);




const todosschema=mongoose.Schema({
    task:{
        type:String,
        require:true
    },
    isComplete:{
        type:Boolean,
        default:false
    
    }
})


const todoModel=mongoose.model("todo",todosschema)

module.exports={
    // connection,
    todoModel
}