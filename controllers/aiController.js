const aiController = (req,res)=>{
    try{
        pass
    }catch(err){
        res.status(500).json({
            success:false,
            error:"internal server error"
        })
    }
}

module.exports = aiController