const studentService = require ('../service/students');
async function get(request, response, next){
    const data = await studentService.get();
    response.json(data);
}

async function post(request, response, next){
    const data = request.body
   const result = await studentService.post(data);
   response.json(result);
}

async function put(request, response, next){
    const data = request.body;
    const id = request.params.student_id;
    const result = await studentService.put(data, id);
    response.json(result);
}

async function getByBatch(request, response, next){
    const batch = request.params.batch;
    const result = await studentService.getByBatch(batch);
    response.json(result);
}
async function getByID(request, response, next){
    const id = request.params.student_id;
    const result = await studentService.getByID(id);
    response.json(result);
}

async function del(request, response, next) {
    const del_id = request.params.student_id;
    const result = await studentService.delete(del_id);
    response.json(result);
}

module.exports = {
    get: get,
    post : post,
    put : put,
    getByBatch : getByBatch,
    getByID : getByID,
    delete : del
}