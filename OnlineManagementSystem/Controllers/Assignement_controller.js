const Assignement_model  = require ("../Models/Assignement_model")


module.exports={

    save:(req,res)=>{

        
           const Assignement = new Assignement_model(req.body)
           Assignement.save(req.body,(err,item)=>{
            if(err){
                res.status(406).json({message:"failed to save Assignement "+err})
            }else{
                res.status(201).json({message:"Assignement saved successfully",data:item})
            }
           })
         },
            getAll:(req,res)=>{
            Assignement_model.find({},(err,items)=>{
                if(err){
                    res.status(406).json({message:"failed to get all registered Assignement"})
                }else{
                 res.status(201).json({message:"list of registered Assignement",data:items }) 
                }
            })
        },
        getById:(req,res)=>{
            Assignement_model.findById(req.params.id,(err,item)=>{
                if(err){
                    res.status(406).json({message:"cannot get Assignement by this id"})
                }else{
                    res.status(201).json({message:"Assignement",data:item})
                }
            }) 
        },
        getByName:(req,res)=>{
            Assignement_model.find({Name:req.query.Name},(err,items)=>{
             if(err){
                res.status(406).json({message:"failed to get Assignement by this name"}+err)
             }else{
                 res.status(201).json({message:"Assignement",data:items})
             }
            })
        },
        update:(req,res)=>{
            Assignement_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>{
                if(err){
                    res.status(406).json({message:"failed to updated Assignement"})
                }else{
                    res.status(200).json({message:"Assignement updated successfully",data:item})
                }
            })
        },
        delete:(req,res)=>{
            Assignement_model.findByIdAndRemove(req.params.body, (err)=>{
                if(err){
                    res.status(406).json({message:"failed to deleted Assignement"})
                }else{
                    res.status(201).json({message:"Assignement deleted successfully"})
                }
            })
        }
           
}      