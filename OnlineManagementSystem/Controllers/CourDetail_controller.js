const CourDetail_model  = require ("../Models/CourDetail_model")


module.exports={

    save:(req,res)=>{

        
           const CourDetail = new CourDetail_model(req.body)
           CourDetail.save(req.body,(err,item)=>{
            if(err){
                res.status(406).json({message:"failed to save CourDetail "+err})
            }else{
                res.status(201).json({message:"CourDetail saved successfully",data:item})
            }
           })
         },
            getAll:(req,res)=>{
            CourDetail_model.find({},(err,items)=>{
                if(err){
                    res.status(406).json({message:"failed to get all registered CourDetail"})
                }else{
                 res.status(201).json({message:"list of registered CourDetail",data:items }) 
                }
            })
        },
        getById:(req,res)=>{
            CourDetail_model.findById(req.params.id,(err,item)=>{
                if(err){
                    res.status(406).json({message:"cannot get CourDetail by this id"})
                }else{
                    res.status(201).json({message:"CourDetail",data:item})
                }
            }) 
        },
        getByName:(req,res)=>{
            CourDetail_model.find({Name:req.query.Name},(err,items)=>{
             if(err){
                res.status(406).json({message:"failed to get CourDetail by this name"}+err)
             }else{
                 res.status(201).json({message:"CourDetail",data:items})
             }
            })
        },
        update:(req,res)=>{
            CourDetail_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>{
                if(err){
                    res.status(406).json({message:"failed to updated CourDetail"})
                }else{
                    res.status(200).json({message:"CourDetail updated successfully",data:item})
                }
            })
        },
        delete:(req,res)=>{
            CourDetail_model.findByIdAndRemove(req.params.body, (err)=>{
                if(err){
                    res.status(406).json({message:"failed to deleted CourDetail"})
                }else{
                    res.status(201).json({message:"CourDetail deleted successfully"})
                }
            })
        }
           
}      