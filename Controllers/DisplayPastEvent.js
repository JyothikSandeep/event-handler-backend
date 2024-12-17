const {Event}=require("../model/AddEvent")
const DisplayPastEvent=async(req,res)=>{
    const data=await Event.find({event_date:{$lt:Date.now()}});
    console.log(data)
    
    res.send(data)


}
module.exports={DisplayPastEvent}