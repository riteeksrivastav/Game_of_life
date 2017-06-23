//Point class that represents a point on a grid
let Point = function (x, y) {
  this.x = x;
  this.y = y;
}

let getPoint = function (x, y) {
  return "x" + x + "y" + y;
}

let alive = {};
let dummy = {};

let getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let initialize = function() {
  for(let i = 0; i < row*40; i++) {
    let x = getRandom(0,row);
    let y = getRandom(0,col);
    let point = new Point(x,y);
    alive[(getPoint(x,y))] = point;
  }
}

let getLiveNeighbours = function (x, y, alive) {
  let r = [-1,-1,-1,0,0,1,1,1];
  let c = [-1,0,1,-1,1,-1,0,1];
  let count =0;
  for(let i=0; i<8; i++)
  {
    if( alive[getPoint(x+r[i], y+c[i])] != undefined )
      count++;
  }
  return count;
}


let next_state = function (alive, dummy) {
  for(key in alive)
  {
    let live_neighbours = getLiveNeighbours(alive[key].x, alive[key].y,alive);
    if(live_neighbours === 3 || live_neighbours === 2)
      dummy[key] = alive[key];
    let r = [-1,-1,-1,0,0,1,1,1];
    let c = [-1,0,1,-1,1,-1,0,1];
    for (let i = 0; i < 8; i++) {
      let temp_x =  alive[key].x + r[i];
      let temp_y =  alive[key].y + c[i];
      if (temp_x >= 0 && temp_x < row && temp_y >= 0 && temp_y < col) {
         if (alive[getPoint(alive[key].x+r[i], alive[key].y + c[i])] === undefined) {
           let neighbours = getLiveNeighbours(alive[key].x + r[i], alive[key].y + c[i],alive);
           if (neighbours === 3)  {
             let point = new Point(alive[key].x + r[i], alive[key].y + c[i],true);
             dummy[getPoint(alive[key].x + r[i], alive[key].y + c[i])] = point;
           }
        }
      }
    }
  }
 return dummy;
}

module.exports = {
  Point: Point,
	getPoint: getPoint,
  getLiveNeighbours: getLiveNeighbours,
  next_state: next_state
}
