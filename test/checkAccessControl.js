// Require packages
const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert, expect } = chai;
chai.use(chaiHttp);
const uacValidator = require('../index')('albert-dev');

//Variable declaration
let userTypeId = 1;
let moduleName = "COMPANY";
let apiType = "POST";


describe("*** Method : GET - validate Service ***", async function (done) {

    it('generate : Positive Scenario --> allow to access', async () => {
        let generated = await uacValidator.validate(userTypeId, moduleName,apiType);
        assert.ok(generated);
        expect(generated).to.be.a('boolean');
        expect(generated).to.be.a('boolean').to.deep.equal(true);
    }).timeout(5000);

    // it('generate : Positive Scenario --> data exists without category', async () => {
    //     let generated = await uacValidator.generate(tenantId, 'COM');
    //     assert.ok(generated);
    //     expect(generated).to.be.a('string');
    // }).timeout(5000);


    // it('generate : Positive Scenario --> data does not exist with right category', async () => {
    //     let generated = await uacValidator.generate(tenantId, 'TNY');
    //     assert.ok(generated);
    //     expect(generated).to.be.a('string');
    // }).timeout(5000);


    it('generate : Negative Scenario --> Invalid moduleName or apiType', async () => {
        let generated = await uacValidator.validate(userTypeId, moduleName,"");
        expect(generated).to.be.a('boolean').to.deep.equal(false);
    })
    done()
})