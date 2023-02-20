const { where } = require('sequelize');
const {db}=require('../../config/db');

const Event=db.event;


async function updateEvent(req,res){
    try{
        // const {oldPassword,newPassword,email}=req.body;
        // console.log(req.body);
        const {id}=req.body;

        const event = await Event.findOne({where:{id:id}}).catch((err)=>{
            console.log(err);
        })

        if(event){
            Event.update({...req.body},{where:{id:id}}).then(upRes=>{
                if(upRes.length==1){
                    return res.status(200).send({"message":"event updated"});        
                }
            }).catch(err=>console.log(err))
        }

       }catch(e){
        console.log(e)
       }
    
}

module.exports=updateEvent