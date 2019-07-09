const mongoose = require('mongoose');

const triviaSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,

    },
    option : {
        A: {
            type: String,
            required: true
        },
        B: {
            type: String,
            required: true
        },
        C: {
            type: String,
            required: true
        },
        D: {
            type: String,
            required: true
        }
    }
});
module.exports = mongoose.model('Trivia', triviaSchema);