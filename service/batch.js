const indexUtil = require ('../utils/index')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

async function get(){
    const data = await indexUtil.getFromDatabase('tbl_batch');
    return data;
}

async function post(data){
   const result =  await indexUtil.saveToDatabase({table : 'tbl_batch',payload : {
        batch_name : data.batch_name
    }})
    return result;
}

async function put(data, id){
    const result = await indexUtil.updateDatabaseTable({table : 'tbl_batch', id : id, column : 'id', payload : {
        batch_name : data.batch_name
    }})
	return result;
}

async function del(del_id){
    const id = del_id;
    const result = await indexUtil.deleteFromDatabaseTable({table : 'tbl_batch', id : id, column : 'id'});
    return result;
}

async function getByID(batch_id){
    const result = await indexUtil.getFromDatabaseByColumnValue({columnValue : batch_id, column: 'id', table : 'tbl_batch'})
    return result;
}


module.exports = {
    get : get,
    post : post,
    put : put,
    delete : del,
    getByID : getByID
}