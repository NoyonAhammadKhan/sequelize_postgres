const InvitedGuest=require('../../models/invitedGuestModel');






async function inviteGuest(req,res){
    const {guestEmail}=req.body;

    const newGuest = new InvitedGuest({guestEmail})

    let savedGuest;
    try{
        savedGuest=await newGuest.save().catch((err)=>{
            return res.json({message:"cannot register guest now"})
        })
    }catch(e){
        console.log(e)
    }
    if(savedGuest){
        return res.json({message:"Thanks for adding a guest"})
    }
}


module.exports=createEvent
