const express = require('express');
const Exam = require('../models/examModel')
const router = express.Router();

const UserController = require('../controllers/user-controller');

router.get('/', UserController.getUser);

router.get('/', async (req, res) => {
    const {title, examID, BMI} = req.body
    try {
        const exam = await Exam.create({title, examID, BMI})
        res.sendStatus(200).json(exam)    
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router;
