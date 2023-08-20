const CourList_model  = require ("../Models/CourList_model")


module.exports={

    save:(req,res)=>{

        
           const CourList = new CourList_model(req.body)
           CourList.save(req.body,(err,item)=>{
            if(err){
                res.status(406).json({message:"failed to save CourList "+err})
            }else{
                res.status(201).json({message:"CourList saved successfully",data:item})
            }
           })
         },
            getAll:(req,res)=>{
            CourList_model.find({},(err,items)=>{
                if(err){
                    res.status(406).json({message:"failed to get all registered CourList"})
                }else{
                 res.status(201).json({message:"list of registered CourList",data:items }) 
                }
            })
        },
        getById:(req,res)=>{
            CourList_model.findById(req.params.id,(err,item)=>{
                if(err){
                    res.status(406).json({message:"cannot get CourList by this id"})
                }else{
                    res.status(201).json({message:"CourList",data:item})
                }
            }) 
        },
        getByName:(req,res)=>{
            CourList_model.find({Name:req.query.Name},(err,items)=>{
             if(err){
                res.status(406).json({message:"failed to get CourList by this name"}+err)
             }else{
                 res.status(201).json({message:"CourList",data:items})
             }
            })
        },
        update:(req,res)=>{
            CourList_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>{
                if(err){
                    res.status(406).json({message:"failed to updated CourList"})
                }else{
                    res.status(200).json({message:"CourList updated successfully",data:item})
                }
            })
        },
        delete:(req,res)=>{
            CourList_model.findByIdAndRemove(req.params.body, (err)=>{
                if(err){
                    res.status(406).json({message:"failed to deleted CourList"})
                }else{
                    res.status(201).json({message:"CourList deleted successfully"})
                }
            })
        }
           
}      