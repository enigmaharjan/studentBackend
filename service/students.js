const indexUtil = require ('../utils/index')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

async function get(){
    const data = await indexUtil.getFromDatabase('student_list');
    return data;
}

async function post(data){
   const result =  await indexUtil.saveToDatabase({table : 'student_list',payload : {
        student_id : data.student_id,
        batch : data.batch,
		student_name : data.student_name,
		address : data.address,
		email : data.email,
		contact_number : data.contact_number,
		guardian_name : data.guardian_name,
		guardian_contact : data.guardian_contact,
		date_of_birth : data.date_of_birth,
		date_joined : data.date_joined,
		image_name :data.image_name
	}})
	console.log('studentServicePost');
	return result;
}

async function put(data, id){
    const result = await indexUtil.updateDatabaseTable({table : 'student_list', id : id, column : 'student_id', payload : {
        batch : data.batch,
		student_name : data.student_name,
		address : data.address,
		email : data.email,
		contact_number : data.contact_number,
		guardian_name : data.guardian_name,
		guardian_contact : data.guardian_contact,
		date_of_birth : data.date_of_birth,
		date_joined : data.date_joined,
		image_name :data.image_name
    }})
    return result;
}

async function getByBatch(batch){
    const result = await indexUtil.getFromDatabaseByColumnValue({columnValue : batch, column: 'batch', table : 'student_list'})
    return result;
}
async function getByID(id){
    const result = await indexUtil.getFromDatabaseByColumnValue({columnValue : id, column: 'student_id', table : 'student_list'})
    return result;
}

async function del(del_id){
    const id = del_id;
    const result = await indexUtil.deleteFromDatabaseTable({table : 'student_list', id : id, column : 'student_id'});
    return result;
}

module.exports = {
    get : get,
    post : post,
    put : put,
	getByBatch : getByBatch,
	getByID : getByID,
	delete: del
}