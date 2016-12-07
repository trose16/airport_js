describe("Airport", function () {

  var airport, plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('instructs a plane to land', function() {
    airport.land(plane);
    expect(airport.planes).toContain(plane)
  });

  it('Airport allows planes to take-off', function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes).not.toContain(plane)
  });

});
