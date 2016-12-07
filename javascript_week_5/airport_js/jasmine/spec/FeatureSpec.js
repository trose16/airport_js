'use strict';

describe('Feature Test', function() {

  var airport, plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('instructs a plane to land', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane)
  });

  it('instructs a plane to take off from airport', function() {
    plane.land(airport);
      plane.takeOff(airport);
    expect(airport.planes()).not.toContain(plane)
  });

})
