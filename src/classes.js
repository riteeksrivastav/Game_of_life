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

const row = 400;
const col = 400;

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
  },
  next_state : function(point){
    var x = point.x;
    var y = point.y;
    var count = this.aliveNeighbours(point);
    var state = 0;
    if(point.alive){
      switch(count){
        case 0:
        case 1:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        state = 0;
        break;
        case 2:
        case 3:
        state = 1;
        break;
      }
    }else{
      switch(count){
        case 3:
        state = 1;
        break;
        default:
        state = 0;
      }
    }
    return state;
  },
  fill_grid : function(r,c){
    for(var i = 0 ; i<r ; i++){
      for(var j = 0 ; j<c ; j++){
        var random = Math.random();
        var point;
        if(random > 0.7)
        {
          point = new Point(i,j,true);
        }
        else
        {
          point = new Point(i,j,false);
        }
        this.addPoint(point);
      }
    }
  }

}


module.exports = {
	Point: Point,
	Grid: Grid,
	getPoint: getPoint
}