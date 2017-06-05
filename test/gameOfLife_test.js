var assert = require('assert');
var classes = require('../src/classes');

describe('classes', function(){

	describe('getPoint', function(){
		it('returns x0y0 when input is 0,0', function(){

			assert.equal("x0y0", classes.getPoint(0,0));

		})
	})

});