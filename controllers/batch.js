const classService = require('../service/batch')
async function get(request, response, next) {
    const data = await classService.get();
    response.json(data);
}

async function post(request, response, next) {
    const data = request.body
    const result = await classService.post(data);
    response.json(result);
}

async function put(request, response, next) {
    const data = request.body;
    const id = request.params.batch_id;
    const result = await classService.put(data, id);
    response.json(result);
}

async function del(request, response, next) {
    const del_id = request.params.batch_id;
    const result = await classService.delete(del_id);
    response.json(result);
}

async function getByID(request, response, next) {
    const batch_id = request.params.batch_id;
    const result = await classService.getByID(batch_id);
    response.send(result);
}


module.exports = {
    get: get,
    post: post,
    put: put,
    delete: del,
    getByID: getByID
}