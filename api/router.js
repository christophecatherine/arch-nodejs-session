/*
 * Import Module
 ****************/ 
const express = require('express'),
    router = express.Router(),
    path = require('path')

/*
 * Controller
 *************/ 
const homeController = require('./controllers/homeController'),
    articleController = require('./controllers/articleController'),
    contactController = require('./controllers/contactController'),
    userController = require('./controllers/userController'),
    authController = require('./controllers/authController');

/*
 * Router
 ***********/

// Home
router.route('/')
    .get(homeController.get)

// Article
router.route('/article')
    .get(articleController.get)
    .post(articleController.post)
    .delete(articleController.deleteAll)

// Article ID
router.route('/article/:id')
    .delete(articleController.deleteOne)

// Contact
router.route('/contact')
    .get(contactController.get)

// Auth
router.route('/register')
    .post(authController.register)

router.route('/login')
    .post(authController.login)

router.route('/logout')
    .get(authController.logout)

// Auth
router.route('/user')
    .get(userController.get)

router.route('/user/:id')
.put(userController.edit)
.delete(userController.deleteOne)

/***********
 * / Router
 */

 
// on export router pour le récupérer dans ../server.js
module.exports = router;