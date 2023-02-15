const Event = require('../../models/eventsModel');





async function createEvent(req,res){
    const {eventName,details,eventCreator,eventDate}=req.body;

    const newEvent = new Event({eventName,details,eventCreator,eventDate});

    let savedEvent;
    try{
        savedEvent=await newEvent.save().catch((err)=>{
            return res.json({message:"cannot register event now"})
        })
    }catch(e){
        console.log(e)
    }
    if(savedEvent){
        return res.json({message:"Thanks for making an event"})
    }
}


module.exports=createEvent
