
const {db}=require('../../config/db');
const InvitedGuest=db.guest;
const Event = db.event;

async function getEvent(req,res){
    let data = await InvitedGuest.findAll({
        attributes:['id','email',],
        include:[
            {
                model:Event,
                as:'guestEvent',
                attributes:['eventName','id']
            }
        ],
        where:{id:1}
        
    })
    res.status(200).json({data:data});
}

module.exports=getEvent;