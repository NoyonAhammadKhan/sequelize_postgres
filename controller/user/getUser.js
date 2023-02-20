
const {db}=require('../../config/db');
const User = db.user;
const Event = db.event;

async function getUser(req,res){
    let data = await User.findAll({
        attributes:['id','fullName','email'],
        include:[
            {
                model:Event,
                as:'userEvents',
                attributes:['eventName','eventDetails']
            }
        ],
        where:{id:1}
        
    })
    res.status(200).json({data:data});
}

module.exports=getUser;