describe("creepyDancer", function() {

  var creepyDancer;
  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;
  debugger;
  beforeEach(function() {
    window.dancers = [];
    clock = sinon.useFakeTimers();
    creepyDancer = new makeCreepyDancer(10, 20, timeBetweenSteps);
    blinkyDancer = new makeBlinkyDancer(100, 200, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(creepyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes it change position", function() {
    // sinon.spy(creepyDancer, 'stepPosition');
    // creepyDancer.step();
    // expect(creepyDancer.stepPosition.called).to.be.true;
  });



  describe("dance", function(){

    it("should call step at least once per second", function(){
      sinon.spy(creepyDancer, "step");
      expect(creepyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(creepyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(creepyDancer.step.callCount).to.be.equal(2);
    });
  });
});
