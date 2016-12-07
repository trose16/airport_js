function Plane() {

}

Plane.prototype.land = function(airport) {
  this.planes.push(airport)
};

Plane.prototype.takeOff = function(airport) {
  this.planes.pop(plane)
};
