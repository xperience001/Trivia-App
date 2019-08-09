const Trivia = require('../models/trivia');

class Alltrivia {

    getAllTrivia(req, res){
        Trivia.find().select({"__v": 0})
        .then((trivia) => {
            res.send({
                error: false,
                statusCode: 200,
                triviaCount: trivia.length,
                message: 'all trivia',
                response: trivia
                })
        }).catch((err) => {
            res.send({
                error: true,
                statusCode: 400,
                message: 'err', err
                })
        });
    }



    getTrivia(req, res){
        const {triviaid} = req.params
        if(!triviaid){
            return res.send({
                error: true,
                statusCode: 404,
                message: 'oga pass id joor',
                })
        }
        Trivia.findById(triviaid).then((trivia) => {
            return res.send({
                error: false,
                statusCode: 200,
                message: 'a trivia',
                response: trivia
                })
        }).catch((err) => {
           return res.send({
                error: true,
                statusCode: 400,
                message: 'err', err
                })
        });
    }

    createTrivia(req, res){
        let trivia = new Trivia(req.body);
        trivia.save().then((trivia) => {
            return res.send({
                error: false,
                statusCode: 200,
                message: 'successfully created a trivia'
                })
        }).catch((err) => {
           return res.send({
                error: true,
                statusCode: 400,
                message: 'err', err
                })
        });   
    }

    getTriviaByUser(req, res){
        res.status(200).send({
        error: false,
        message: 'healthy API, you are welcome'
    });
    }
}

//const TriviaInstance = new Alltrivia();
module.exports = Alltrivia;
