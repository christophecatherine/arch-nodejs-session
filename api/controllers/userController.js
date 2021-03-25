/*
 * Controller
 *************/ 
const User = require('../database/User')

module.exports = {
    // Method Get
    get: async (req, res) => {
        const dbUser = await User.find().lean()
        const sess = req.session

        console.log(dbUser)

        res.render('user', {
            sess: sess,
            dbUser
        })
    },
    // Method Put
    edit: (req, res) => {
        let boolAdmin = false
        let boolVerified = false
        let boolBan = false

        if (req.body.isAdmin === 'on' ) boolAdmin = true;
        if (req.body.isBan === 'on' ) boolBan = true;
        if (req.body.isVerified === 'on' ) boolVerified = true;

        User
            .findByIdAndUpdate(req.params.id, {
                isAdmin: boolAdmin,
                isVerified: boolVerified,
                isBan: boolBan,
            }, (err, data) => {
                if (err) console.log(err)
                res.redirect('/user')
            })
    },
    // Method Delete
    deleteOne: (req, res) => {
        // Fonction de suppression de un Articles rechercher par son _id
        User.deleteOne({
            // On va venir chercher parmis tout les _id celui égale à notre req.params (id recupéré dans l'URL)
            _id: req.params.id
            // ici nous avons un callback err
        }, (err) => {
            // Si nous avons pas d'erreur alors on redirige
            if (!err) return res.redirect('/user')
            // Sinon on renvoit l'err
            else res.send(err)
        })
    },
}