describe("slidyDancer", function() {

  var slidyDancer;
  var timeBetweenSteps = 100;
  var clock;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slidyDancer = new makeSlidyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(slidyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes it move horizontally", function() {
    sinon.spy(slidyDancer, 'setPosition');
    slidyDancer.step();
    expect(slidyDancer.setPosition.called).to.be.true;
  });



  describe("dance", function(){

    it("should call step at least once per second", function(){
      sinon.spy(slidyDancer, "step");
      expect(slidyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(slidyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slidyDancer.step.callCount).to.be.equal(2);
    });
  });
});
