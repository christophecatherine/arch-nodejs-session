/*
 * Controller
 *************/ 
module.exports = {
    // Method Get
    get: (req, res) => {
        const sess = req.session
        console.log(sess)
        
        res.render('home', {
            sess: sess
        })
    }
}