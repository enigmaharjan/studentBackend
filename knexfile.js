const path = require('path')
module.exports = {
    client: 'pg',
    connection:{
        host:'localhost',
        user: 'shiva',
        password: 'shiva',
        database:'fee_mgmt'
    },
    migrations:{
        tableName:'migrations',
        directory: path.resolve(__dirname, './migrations'),
    },
    useNullAsDefault:true
};