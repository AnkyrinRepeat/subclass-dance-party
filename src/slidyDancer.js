var makeSlidyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.dancing = true;
};

makeSlidyDancer.prototype = Object.create(makeDancer.prototype);
makeSlidyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  var oldStep = makeDancer.prototype.step.bind(this);
  oldStep();

  if(this.dancing) {
    this.setPosition(top, $("body").width() * Math.random());
  }
}


makeSlidyDancer.prototype.lineUp = function(top) {
  //Stops slidy dancer from moving when it lines up.
  this.dancing = false;
  this.setPosition(top, 100);
};
