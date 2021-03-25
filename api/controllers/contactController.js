
/*
 * Controller
 *************/ 
module.exports = {
    // Method Get
    get: (req, res) => {
        const sess = req.session
        res.render('contact', {
            sess: sess
        })
    }
}