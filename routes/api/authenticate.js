const express = require('express');
const router = express.Router();
const auth = require("../../controllers/AuthController");
const postsController = require('../../controllers/PostsController')


function loggedIn (req, res, next) {
        console.log(req.user)
      }
    
// router.route('/')
//         .post(auth.bodyTest);
// restrict index for logged in user only
router.get('/', loggedIn, auth.home);

// route to register page
router.get('/register', auth.register);

router.get('/test', (req, res) => {
        console.log('hitting test')
        res.json({ json: true })
});

// route for register action
router.post('/register', auth.doRegister, (req, res) => {
        console.log('hi register route')
        // res.json({json: true})
});




// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin);

// route for logout action
router.get('/logout', auth.logout);

// route for seeing all items in db
router.route('/users')
        .get(auth.findAll);


// router.get('/users', (req, res) => {
//     console.log("pong")
// })

router.route('/posts')
    .get(postsController.findAll)
    .post(postsController.create)
    .delete(postsController.delete);

module.exports = router;