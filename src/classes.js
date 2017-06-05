//Point class that represents a point on a grid
var Point = function (x,y,alive){
  this.x = x;
  this.y = y;
  this.alive = alive;
}

Point.prototype = {
  isAlive : function(){
    return this.alive;
  }
}

var row = 400;
var col = 400;

function getPoint(x,y){
  return "x" + x + "y" + y;
}

//Grid class that represents the board
var Grid = function(){
  this.points = {};
}

Grid.prototype = {
  addPoint : function(point){
    this.points[getPoint(point.x,point.y)] = point;
  },
  getPointAt : function(x,y){
		return this.points[getPoint(x,y)]; 
 },
 aliveNeighbours : function(point){
    var x = point.x;
    var y = point.y;
    var alivePoints = 0;
    var r = [-1,-1,-1,0,0,1,1,1];
    var c = [-1,0,1,-1,1,-1,0,1];
    for(var i = 0; i<8; i++)
    {
      var temp_x = x + r[i];
      var temp_y = y + c[i];
      if(temp_y >=0 && temp_y < col && temp_x < row && temp_x >=0)
       if(this.getPointAt(temp_x,temp_y).alive)
        alivePoints++;
    }
    return alivePoints;
  }

}

module.exports = {
	Point: Point,
	Grid: Grid,
	getPoint: getPoint
}