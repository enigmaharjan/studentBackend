const { getFromDatabaseByColumnValue } = require('../utils/index');


const chai = require('chai');
const expect = chai.expect

describe("Utils Index updateDatabaseTable function test", () => {
    it('should be a function', () => {
        expect(getFromDatabaseByColumnValue).to.be.a('function');
    })

    it('should return data when called', async () => {    
        const table = 'student_list';
        const column = 'batch';
        const columnValue = '19B';

        let data = await getFromDatabaseByColumnValue({columnValue,table,column});
        let dataRes = await data;
        expect(dataRes).to.be.an('array')
    })

    it('should throw error when required data is not sent', async () => {
        let data = await getFromDatabaseByColumnValue('a');
        let dataRes = await data;
        expect(dataRes).to.be.an('error')
    })

})