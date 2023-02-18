const Task = require('../model/task')
const asyncwrapper = require('../middleware/asyncwrapper')


const getalltask = asyncwrapper(async(req , res)=>{
    const task = await Task.find({})
    res.status(200).json({task , result:task.length})
})

const createtask = asyncwrapper(async(req , res)=>{
    const task = await Task.create(req.body)
    res.status(200).json({task})
})

const getsingletask = asyncwrapper(async(req , res)=>{
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
       return res.status(404).json({msg:`There is no task with the id ${taskID}`})
    }
    res.status(200).json({task})
})

const updatetask = asyncwrapper(async(req , res)=>{
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID} , req.body , {
        new:true,
        runValidators:true
    })
    if(!task){
      return  res.status(404).json({msg:`There is no task with the id ${taskID}`})  
    }
    res.status(200).json({task})
})


const deletetask = asyncwrapper(async(req , res)=>{
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if(!task){
       return res.status(404).json({msg:`There is no task with the id ${taskID}`})
    }
    res.status(204).json({task:null})
})

module.exports = {
    getalltask,
    getsingletask,
    updatetask,
    deletetask,
    createtask
}




