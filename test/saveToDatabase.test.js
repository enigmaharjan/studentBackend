const { saveToDatabase } = require('../utils/index');


const chai = require('chai');
const expect = chai.expect

describe("Utils Index saveToDatabaseTable function test", () => {
    it('should be a function', () => {
        expect(saveToDatabase).to.be.a('function');
    })

    it('should return "success" when data is sent', async () => {
        const table = 'tbl_batch'
        const payload = {
            batch_name: '12'
        }
        const result = 'success'
    
        let data = await saveToDatabase({table, payload});
        let dataRes = await data;
        expect(dataRes.status).to.be.deep.equal(result)
    })

    it('should return failed when required data is not sent', async () => {
        const table = 'tbl_batch'
        const payload = {}
        const results = 'failed'
        
        let data = await saveToDatabase({table,payload});
        let dataRes = await data;
        expect(dataRes.status).to.be.deep.equal(results)
    })

})