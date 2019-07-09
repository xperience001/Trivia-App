const User = require('../models/user');
const validator = require('validator');

class Alluser {
    signup(req,res){
        let user = new User(req.body);
        let { email } = req.body;

        if(validator.isEmail(email) != true){
            return res.status(400).send({
                error: true,
                code: 400,
                message: 'email is not correct'
            });
        }

        User.findOne({email})
        .then( data =>{
            if(data){
                return res.send({
                    error:true,
                    message: `email ${email} already exists`
                });
            }
            user.save().then( data =>{
                return res.send({
                    error: false,
                    message: `user was registered successfully`,
                    user_id: data._id
                })
            }).catch( error =>{
                return res.send({
                    error: true,
                    message: 'unable to save to db',
                    response: error
                })
            })

    }).catch( error=>{
        return res.send({
            error: true,
            message: 'unable to find from db',
            response: error
        })
    }) 
    }

    login(req,res){
        let { email } = req.body;
        let { password } = req.body
        if(validator.isEmail(email) !== true){
            return res.send({
                error: true,
                message: `invalid email address`
            })
        }
        if(!email){
            return res.send({
                message: `enter a valid email`
            })
        }
        User.findOne({email, password})
        .then(data=>{
            if(data){
                return res.send({
                    error: false,
                    message: 'user successfully logged-in'
                })
            }
            else{
                return res.send({
                    error: true,
                    message: 'invalid username or password'
            })
            }
        }
        )
        .catch(err=>{
            return res.send({
                error: true,
                message: 'an error occured',
                response: err
            })
        })
    }
}    


module.exports = Alluser;