const Express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const dbConfig = require('./knexfile');
const dbClient = knex(dbConfig);
const path = require('path');

//For uploading the image
var uploadRouter = require('./upload');

const studentController = require('./controllers/students')
const batchController = require('./controllers/batch')
const feeController = require('./controllers/fee')

const jwtMiddle = require('express-jwt-middleware')
const jwtCheck = jwtMiddle('secret')
//Remember You have auth branch made for branching. So merge it someday
//encryption and jsonwebtoken
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const express = new Express();
express.use(bodyParser.json());
express.use(cors());
express.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



async function authenticate(request, response, next) {
    const authpassword = request.body.password;
    const authusername = request.body.username;
    const designation = request.body.designation;
    const data = await dbClient
        .table('login_tbl')
        .first('password')
        .where('username', authusername) //username is set from the if else condition to match table column
        .andWhere('designation', designation)

    if (!data) {
        response.json({
            success: 'false',
            message: 'No User Found!!'
        })
    }
    else {
        const dbpassword = data.password;
        const isMatch = bcrypt.compareSync(authpassword, dbpassword)
        if (isMatch) {
            const token = jwt.sign({ username: authusername }, 'secret');
            response.json({
                success: 'true',
                message: 'Welcome, ' + authusername,
                accessToken: token
            })
        }
        else {
            response.json({
                status: 'false',
                message: 'Invalid Credentials!!'
            })
        }
    }

}
express.get('/access', jwtCheck, (req, res) => {
    res.send(req.tokenData);
});

express.post('/login', cors(), authenticate)
express.use('/upload', uploadRouter);       //Route for uploading image
express.use(Express.static(path.join(__dirname, 'public')));   //for checking the path

express.post('/api/batch', jwtCheck, cors(), batchController.post)
express.get('/api/batch', jwtCheck, cors(), batchController.get)
express.put('/api/batch/update/:batch_id', cors(), batchController.put)
express.get('/api/batch/:batch_id', cors(), batchController.getByID)
express.delete('/api/batch/delete/:batch_id', cors(), batchController.delete)

express.put('/api/fee/:fee_id', cors(), feeController.put)
express.get('/api/fee/:fee_id', cors(), feeController.getByID)
express.delete('/api/fee/delete/:fee_id', feeController.delete)
express.get('/api/fee', cors(), feeController.get)
express.get('/api/fee/:batch/:amount', cors(), feeController.getByBatch)
express.post('/api/fee', cors(), feeController.post)


express.get('/api/students/batch/:batch', cors(), studentController.getByBatch)
express.get('/api/students/:student_id', cors(), studentController.getByID)
// express.post('/api/authenticate', cors(), authenticate)
express.put('/api/students/:student_id', cors(), studentController.put)
express.post('/api/students', cors(), studentController.post)
express.get('/api/students', jwtCheck, cors(), studentController.get)//data will be in [] format..
express.delete('/api/students/delete/:student_id', studentController.delete)
express.listen(3000, 'localhost', () => {
    console.log("Running server at port 3000");
});
