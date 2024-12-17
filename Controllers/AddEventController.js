const {Event}=require('../model/AddEvent')
const AddEventController=(req,res)=>{
    console.log(req.body)
    Event.insertMany(req.body);
    res.send("Event registered");
}

module.exports={AddEventController}