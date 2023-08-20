const Cour_model  = require ("../Models/Cour_model")


module.exports={

    save:(req,res)=>{

        
           const cours = new Cour_model(req.body)
           cours.save(req.body,(err,item)=>{
            if(err){
                res.status(406).json({message:"failed to save cours "+err})
            }else{
                res.status(201).json({message:"cours saved successfully",data:item})
            }
           })
         },
            getAll:(req,res)=>{
            Cour_model.find({},(err,items)=>{
                if(err){
                    res.status(406).json({message:"failed to get all registered cours"})
                }else{
                 res.status(201).json({message:"list of registered cours",data:items }) 
                }
            })
        },
        getById:(req,res)=>{
            Cour_model.findById(req.params.id,(err,item)=>{
                if(err){
                    res.status(406).json({message:"cannot get cours by this id"})
                }else{
                    res.status(201).json({message:"cours",data:item})
                }
            }) 
        },
        getByName:(req,res)=>{
            Cour_model.find({Name:req.query.Name},(err,items)=>{
             if(err){
                res.status(406).json({message:"failed to get cours by this name"}+err)
             }else{
                 res.status(201).json({message:"cours",data:items})
             }
            })
        },
        update:(req,res)=>{
            Cour_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>{
                if(err){
                    res.status(406).json({message:"failed to updated cours"})
                }else{
                    res.status(200).json({message:"cours updated successfully",data:item})
                }
            })
        },
        delete:(req,res)=>{
            Cour_model.findByIdAndRemove(req.params.body, (err)=>{
                if(err){
                    res.status(406).json({message:"failed to deleted cours"})
                }else{
                    res.status(201).json({message:"cours deleted successfully"})
                }
            })
        }
           
}      