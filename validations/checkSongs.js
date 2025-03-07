const checkTextInputs = (req,res, next)=>{
    if(req.body.name && req.body.artist && req.body.album && req.body.time){
        console.log("Text values ok")
        next();
    }else{
        res.status(404).json({error: " All Input fields required"});
    }
};

const checkFavorite = (req, res, next) =>{
    if(typeof req.body.is_favorite === "boolean"){
        next();
    }else{
        res.status(404).json({error: "is_favorite must be a true or false value"})
    }
}

module.exports = {
    checkTextInputs,
    checkFavorite
}