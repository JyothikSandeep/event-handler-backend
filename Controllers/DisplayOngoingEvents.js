const {Event}=require("../model/AddEvent")

const DisplayOnGoingEvents=async(req,res)=>{
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
     const data = await Event.find({
       event_date: {
         $gte: startOfDay,
         $lte: endOfDay,
       },
     });
    console.log(data)
    
    res.send(data)

}

module.exports={
    DisplayOnGoingEvents
}