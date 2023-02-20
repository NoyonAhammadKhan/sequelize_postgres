
const {db}=require('../../config/db');
const Event = db.event;


async function createEvent(req,res){
    const {eventName,eventDetails,eventDate,UserId}=req.body;
    console.log(req.body)

    const newEvent = new Event({eventName,eventDetails,eventDate,UserId});

    let savedEvent;
    try{
        savedEvent=await newEvent.save().catch((err)=>{
            console.log(err)
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
