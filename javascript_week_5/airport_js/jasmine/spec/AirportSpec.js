describe("Airport", function () {

  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it('Has no planes by default', function() {
    expect(airport.planes).toEqual([])
  });

});
