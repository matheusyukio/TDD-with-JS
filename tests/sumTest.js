var should = require('should');
var sum = require('../sum');

describe('Test scope of sum.js', function(){
	it('Sum of 2 + 3 should return 5', function(){
		sum(2,3).should.be.equal(5);
	});
	it('Sum of 10 + 10 should return 20', function(){
		sum(10,10).should.be.equal(20);
	});
});