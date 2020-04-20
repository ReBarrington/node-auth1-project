// create middleware
module.exports = (req, res, next) => {
    console.log('session', req.session);

    if (req.session.loggedIn) {
        // return userID = req.session.userId
        next();
    } else {
        res.status(401).json({ message: "You cannot pass! - the authenticator"})
    }
}