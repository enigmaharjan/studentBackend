const indexUtil = require ('../utils/index')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

async function get(){
    const data = await indexUtil.getFromDatabase('student_fee');
    return data;
}

async function post(data){
   const result =  await indexUtil.saveToDatabase({table : 'student_fee',payload : {
        student_id : data.student_id,
        batch : data.batch,
        amount : data.amount,
        fee_date : data.fee_date,
        due_date : data.due_date,
        cleared : data.cleared
    }})
	return result;
}

async function put(data, id){
    const result = await indexUtil.updateDatabaseTable({table : 'student_fee', id : id, column : 'id', payload : {
        student_id : data.student_id,
        batch : data.batch,
        amount : data.amount,
        fee_date : data.fee_date,
        due_date : data.due_date,
        cleared : data.cleared
    }})
    return result;
}

async function getByBatch(batch, amount){
    const result = await indexUtil.getFromDatabaseByColumnValue({columnValue : batch, column: 'batch', table : 'student_fee', amount : amount})
    return result;
}

async function getByID(id){
    const result = await indexUtil.getFromDatabaseByColumnValue({columnValue : id, column: 'id', table : 'student_fee'})
    return result;
}

async function del(del_id){
    const id = del_id;
    const result = await indexUtil.deleteFromDatabaseTable({table : 'student_fee', id : id, column : 'id'});
    return result;
}

module.exports = {
    get : get,
    post : post,
    put : put,
    getByBatch : getByBatch,
    getByID : getByID,
    delete : del
}