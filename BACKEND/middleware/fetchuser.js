const jwt = require("jsonwebtoken")

const JWT_SECRETE = 'Harryisgoodb$oy';

const fetchuser = (req, res, next) => {
    //get the user from the jwt token and add id to req. object

    const token = req.header("auth-token")

    if (!token) {
        res.status(401).send({ error: "token not found in request" })
    }

    try {
        const data = jwt.verify(token, JWT_SECRETE)
        req.user = data.user
        next()
    }
    catch (error) {
        res.status(401).send({ error: "fetchuser catch error" })
    }

}


module.exports = fetchuser