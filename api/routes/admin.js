var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt')

const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://cb2700:test123@mernapp.ruownzp.mongodb.net/?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


// Hashed Admin Password
const hashedPassword = process.env.HASHPASSW

// Endpoint to verify password
router.post('/verifyPassword', async (req, res) => {
  const { adminPassword } = req.body;

  // Compare provided password with the hashed password
  const match = await bcrypt.compare(adminPassword, hashedPassword);

  if (match) {
    res.json({ success: true });
  } else {
    res.json({success: false , message: 'Incorrect password' });
  }
});

router.post('/create', async (req, res) => {
  try {
    const newExam = req.body
    await client.connect()
    const examsDB = client.db("Patient")
    const examColl = examsDB.collection("covidExams")
    const result = await examColl.insertOne(newExam)
    res.status(200).json(result)
  } catch(error) {
      res.status(400).json({error: error.message})
  } 
})


async function deleteExam(req, res, next) {  
  try {
    var id = new ObjectId(req.params.id);
    await client.connect();
    const examsDB = client.db("Patient")
    const examColl = examsDB.collection("covidExams")
    const query = {_id: id}    
    const result = await examColl.deleteOne(query)
    res.status(200).json(result)
  } catch(error) {
      res.status(400).json({error: error.message})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// Gets a specific row of exam data based on the row ID for editing
router.put('/edit/:id', async (req, res) => {
//async function editExam(req, res, next) {  
  try {
    var id = new ObjectId(req.params.id);
    await client.connect();
    const examsDB = client.db("Patient")
    const examColl = examsDB.collection("covidExams")
    const query = {_id: id}
    const update = {$set: req.body}  
    const result = await examColl.updateOne(query, update)
    res.status(200).json(result)
  } catch(error) {
      res.status(400).json({error: error.message})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
})


/* GET exams for specific patient. */
router.get('/delete/:id', function(req, res, next) {
  deleteExam(req, res, next)
});

router.get('/create/:newExam', function(req, res, next) {
  createExam(req, res, next)
});

//router.get('/update/:id', function(req, res, next) {
//  updateExam(req, res, next)
//});

module.exports = router;
