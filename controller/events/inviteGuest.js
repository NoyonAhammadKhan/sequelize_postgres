// const InvitedGuest=require('../../models/invitedGuestModel');
const {db}=require('../../config/db');
const InvitedGuest = db.guest;



async function inviteGuest(req,res){
    const {email,EventId}=req.body;

    const newGuest = new InvitedGuest({email,EventId});

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


module.exports=inviteGuest
