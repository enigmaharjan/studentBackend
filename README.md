Student Fee Management System
Name: Shiva Maharjan

CollegeID: 130629

Batch: Jan19B

Brief description of the domain of your project!

## List of Main Features
List out 3/4 main technical features of your project
Can add, delete, retrieve, update batch
Can add, delete, retrieve, update student
Can add, delete, retrieve, update fee

## API Documentation
List out your main APIs and its sample input and output!
Get batch API:express.get('/api/batch', jwtCheck, cors(), batchController.get)
Result: Lists all the batch

Get Fee By Batch:express.get('/api/fee/:batch/:amount', cors(), feeController.getByBatch)
Result: Lists all the fee related to batch

Get Students By Batch:express.get('/api/students/batch/:batch', cors(), studentController.getByBatch)
Result: Lists all the students of a batch
