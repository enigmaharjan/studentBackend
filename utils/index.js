const knex = require('knex');
const dbConfig = require('../knexfile');
const dbClient = knex(dbConfig);


async function saveToDatabase({ //eg. insert into table
    table,
    payload
}) {
    try {
        if(Object.keys(payload).length > 0){
        const data = await dbClient.table(table).insert(payload)
        if (data != null) {
            return { 
                status: 'success',
                data : data 
            }
        }
    }
    else{
        return {
            status : 'failed'
        }
    }
    }
    catch (err) {
        return {
            status: err
        }
    }

}

async function getFromDatabase(table) { //eg. select * from table
    try {
        const data = await dbClient(table).select('*');
        return data;
    }
    catch (err) {
        return err;
    }
}

async function updateDatabaseTable( //eg. update table by id
    {
        table,
        id,
        column,
        payload
    }
) {
    try {
        const tblColumn = column;
        const data = await dbClient.table(table).where(tblColumn, id).update(payload);
        if (data != null) {
            return { data: 'success' }
        }
    }
    catch (err) {
        return err;
    }
}

async function getFromDatabaseByColumnValue({ columnValue, table, column, amount }) { //eg. select * by batch
    const tblColumn = column;
    const fee_amount = amount;
    try {
        if (fee_amount == 1) {
            const data = await dbClient.table(table).where(tblColumn, columnValue).andWhere('cleared', '=', 'f').select('*');
            return data;
        }
        else if (fee_amount == 0) {
            const data = await dbClient.table(table).where(tblColumn, columnValue).andWhere('cleared', '=', 't').select('*');
            return data;
        }
        else {
            const data = await dbClient.table(table).where(tblColumn, columnValue).select('*')
            return data;
        }
    }
    catch (err) {
        return err;
    }
}

async function deleteFromDatabaseTable({ id, table, column }) {
    try {
        const data = await dbClient.table(table).where(column, id).del();
        return ({ status: 'true' });
    }
    catch (err) {
        return {
            status: 'fail',
            message: err
        };
    }
}

module.exports = {
    saveToDatabase: saveToDatabase,
    getFromDatabase: getFromDatabase,
    updateDatabaseTable: updateDatabaseTable,
    getFromDatabaseByColumnValue: getFromDatabaseByColumnValue,
    deleteFromDatabaseTable: deleteFromDatabaseTable
}