const express = require('express');
const router = express.Router();
const AllTrivia = require('../controllers/trivia');
const Alluser = require('../controllers/user');
const triviaController = new AllTrivia();
const usercontroller = new Alluser();

router.get('/', (req, res)=>{
    console.log('healthy API, you are welcome');
    res.status(200).send({
        error: false,
        message: 'healthy API, you are welcome'
    });
});

// router.get('/all-trivia', triviaController.getAllTrivia)
router.get('/all-trivia', (req, res)=>{
    triviaController.getAllTrivia(req, res);
});

router.get('/trivia/:triviaid', (req, res)=>{
    triviaController.getTrivia(req, res);
});

router.post('/new-trivia', (req, res)=>{
    triviaController.createTrivia(req, res);
});

router.get('/trivia/user', (req, res)=>{
    triviaController.getTriviaByUser(req, res);
});

router.post('/signup', (req,res)=>{
    usercontroller.signup(req,res);
});

router.post('/login', (req,res)=>{
    usercontroller.login(req,res);
});



module.exports = router;
