const assert = require('assert');
const classes = require('../src/classes');

describe('classes', function(){

  describe('getPoint', function(){
    it('returns x1y1 when input is 1,1', function(){
      assert.equal("x1y1", classes.getPoint(1,1));
    })
  });

  describe('getLiveNeighbours', function() {
    it('returns the number of alive cells in neighbour of a particular cell', function(){
      var alive = {};
      alive[classes.getPoint(1,1)] = new classes.Point(1,1);
      alive[classes.getPoint(2,2)] = new classes.Point(2,2);
      alive[classes.getPoint(2,1)] = new classes.Point(2,1);
      assert.equal(2, classes.getLiveNeighbours(1,1,alive));
    })
  })

  describe('next_state', function() {
    it('returns the next state of each cell', function(){
      var alive = {};
      var dummy = {};
      alive[classes.getPoint(1,1)] = new classes.Point(1,1);
      alive[classes.getPoint(2,2)] = new classes.Point(2,2);
      alive[classes.getPoint(2,1)] = new classes.Point(2,1);
      dummy[classes.getPoint(1,1)] = new classes.Point(1,1);
      dummy[classes.getPoint(1,2)] = new classes.Point(1,2);

      assert.equal(dummy,classes.next_state(alive,dummy));


    })
  })

});
