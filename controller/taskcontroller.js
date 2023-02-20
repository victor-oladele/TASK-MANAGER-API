const Task = require('../model/task')
const asyncwrapper = require('../middleware/asyncwrapper')
const {createcustomerror} = require('../error/customerror')


const getalltask = asyncwrapper(async(req , res)=>{
    const task = await Task.find({})
    res.status(200).json({task , result:task.length})
})

const createtask = asyncwrapper(async(req , res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
})

const getsingletask = asyncwrapper(async(req , res , next)=>{
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
       return next(createcustomerror(`There is no task with the id: ${taskID}` , 404))
}
    res.status(200).json({task})
})


const updatetask = asyncwrapper(async(req , res , next)=>{
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID} , req.body , {
        new:true,
        runValidators:true
    })
    if(!task){
      return  next(createcustomerror(`There is no task with the id ${taskID}` , 404))  
    }
    res.status(200).json({task})
})


const deletetask = asyncwrapper(async(req , res , next)=>{
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if(!task){
       return  next(createcustomerror(`There is no task with the id ${taskID}` , 404))
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




