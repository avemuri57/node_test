const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const expect = require('chai').expect;

chai.use(chaiHttp);

let should = chai.should();

describe('Testing API for Authentication',function(){
	it('should have 200 response',function(){
		chai.request(app)
			.get('/')
			.end(function(err,res){
				expect(res).to.have.status(200);
		
			});
	});
})
