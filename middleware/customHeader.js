
const customHeader = (req, res, next) => {
 
 try {
    const apiKey = req.headers.api_key
        if(apiKey === "Hola-Api"){
            next()
        }else{
            res.status(403)
            res.send({error:"API KEY NO ES"})
        }
    
    
    next()
 } catch (error) {
    res.status(403)
    res.send({error:"ALGO OCURRIO EN EL CUSTOM"})
 }
  //console.log(req.headers);
  // next()
};

module.exports = customHeader
