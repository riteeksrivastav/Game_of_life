var assert = require('assert');
var classes = require('../src/classes');

describe('classes', function(){

	describe('getPoint', function(){
		it('returns x0y0 when input is 1,1', function(){

			assert.equal("x1y1", classes.getPoint(1,1));

		})
	});

	describe('addPoint', function(){
		it('adds a point to the grid', function(){
			var grid = new classes.Grid;
			var point = new classes.Point(2,2,true);

			grid.addPoint(point);

			assert.equal(grid.points.x2y2, point);

		})
	})


});