const Lesson_model  = require ("../Models/Lesson_model")


module.exports={

    save:(req,res)=>{

        
           const Lesson = new Lesson_model(req.body)
           Lesson.save(req.body,(err,item)=>{
            if(err){
                res.status(406).json({message:"failed to save Lesson "+err})
            }else{
                res.status(201).json({message:"Lesson saved successfully",data:item})
            }
           })
         },
            getAll:(req,res)=>{
            Lesson_model.find({},(err,items)=>{
                if(err){
                    res.status(406).json({message:"failed to get all registered Lesson"})
                }else{
                 res.status(201).json({message:"list of registered Lesson",data:items }) 
                }
            })
        },
        getById:(req,res)=>{
            Lesson_model.findById(req.params.id,(err,item)=>{
                if(err){
                    res.status(406).json({message:"cannot get Lesson by this id"})
                }else{
                    res.status(201).json({message:"Lesson",data:item})
                }
            }) 
        },
        getByName:(req,res)=>{
            Lesson_model.find({Name:req.query.Name},(err,items)=>{
             if(err){
                res.status(406).json({message:"failed to get Lesson by this name"}+err)
             }else{
                 res.status(201).json({message:"Lesson",data:items})
             }
            })
        },
        update:(req,res)=>{
            Lesson_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>{
                if(err){
                    res.status(406).json({message:"failed to updated Lesson"})
                }else{
                    res.status(200).json({message:"Lesson updated successfully",data:item})
                }
            })
        },
        delete:(req,res)=>{
            Lesson_model.findByIdAndRemove(req.params.body, (err)=>{
                if(err){
                    res.status(406).json({message:"failed to deleted Lesson"})
                }else{
                    res.status(201).json({message:"Lesson deleted successfully"})
                }
            })
        }
           
}      