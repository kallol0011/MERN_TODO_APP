
const mongoose=require ("mongoose")
require("dotenv").config()

const connection = mongoose.connect(process.env.MONGO_URL)






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
    connection,
    todoModel
}