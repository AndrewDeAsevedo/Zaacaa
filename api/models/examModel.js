const mongoose = require('mongoose')
//const { default: Exam } = require('../../client/src/pages/Exam')

// function to create a new schema
const Schema = mongoose.Schema

const examSchema = new Schema({
    title: {
        type: String,
        required: true
    },    
    examID: {
        type: Number,
        required: true
    },
    BMI:{
        type: Number,
        required: true    
    }
})

module.exports = mongoose.model('Exam', examSchema)