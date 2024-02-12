var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://cb2700:test123@mernapp.ruownzp.mongodb.net/?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function selectExam(req, res, next) {  
    try {
      await client.connect();
      //await client.db("admin").command({ ping: 1 });
      const examsDB = client.db("Patient");
      const examColl = examsDB.collection("covidExams");
      const exam = await examColl.findOne()  
      //res.send('API is working properly & connected to db!');
      res.status(200).json(exam)
    } catch(error) {
        res.status(400).json({error: error.message})
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }


/* GET exams for specific patient. */
router.get('/:id', function(req, res, next) {
    selectExam(req, res, next)
});

module.exports = router;
