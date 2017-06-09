const assert = require('assert');
const classes = require('../src/classes');

describe('classes', function(){

	describe('getPoint', function(){
		it('returns x0y0 when input is 1,1', function(){
			assert.equal("x1y1", classes.getPoint(1,1));
  	})
	});
  
});
