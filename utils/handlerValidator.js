const { validationResult } = require("express-validator")

const validateResults = (req, res, next) => {
    try{
        validationResult(req).throw(); // si no pasa .throw hace que pase al error
        return next();
    }catch (err) {
        res.status(403)
        res.send({ errors: err.array() })
    }
}

module.exports = validateResults