const Instructors_model  = require ("../Models/Instructors_model")


module.exports={

    save:(req,res)=>{

        
           const Instructors = new Instructors_model(req.body)
           Instructors.save(req.body,(err,item)=>{
            if(err){
                res.status(406).json({message:"failed to save Instructors "+err})
            }else{
                res.status(201).json({message:"Instructors saved successfully",data:item})
            }
           })
         },
            getAll:(req,res)=>{
            Instructors_model.find({},(err,items)=>{
                if(err){
                    res.status(406).json({message:"failed to get all registered Instructors"})
                }else{
                 res.status(201).json({message:"list of registered Instructors",data:items }) 
                }
            })
        },
        getById:(req,res)=>{
            Instructors_model.findById(req.params.id,(err,item)=>{
                if(err){
                    res.status(406).json({message:"cannot get Instructors by this id"})
                }else{
                    res.status(201).json({message:"Instructors",data:item})
                }
            }) 
        },
        getByName:(req,res)=>{
            Instructors_model.find({Name:req.query.Name},(err,items)=>{
             if(err){
                res.status(406).json({message:"failed to get Instructors by this name"}+err)
             }else{
                 res.status(201).json({message:"Instructors",data:items})
             }
            })
        },
        update:(req,res)=>{
            Instructors_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>{
                if(err){
                    res.status(406).json({message:"failed to updated CourList"})
                }else{
                    res.status(200).json({message:"CourList updated successfully",data:item})
                }
            })
        },
        delete:(req,res)=>{
            Instructors_model.findByIdAndRemove(req.params.body, (err)=>{
                if(err){
                    res.status(406).json({message:"failed to deleted Instructors"})
                }else{
                    res.status(201).json({message:"Instructors deleted successfully"})
                }
            })
        }
           
}      