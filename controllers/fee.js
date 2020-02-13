const feeService = require ('../service/fee');
async function get(request, response, next){
    const data = await feeService.get();
    response.json(data);
}

async function post(request, response, next){
    const data = request.body
   const result = await feeService.post(data);
   response.json(result);
}

async function put(request, response, next){
    const data = request.body;
    const id = request.params.fee_id;
    const result = await feeService.put(data, id);
    response.json(result);
}

async function getByBatch(request, response, next){
    const batch = request.params.batch;
    const amount = request.params.amount;
    const result = await feeService.getByBatch(batch, amount);
    response.json(result);
}

async function getByID(request, response, next){
    const id = request.params.fee_id;
    const result = await feeService.getByID(id);
    response.json(result);
}

async function del(request, response, next) {
    const del_id = request.params.fee_id;
    const result = await feeService.delete(del_id);
    response.json(result);
}

module.exports = {
    get: get,
    post : post,
    put : put,
    getByBatch : getByBatch,
    getByID : getByID,
    delete:del
}