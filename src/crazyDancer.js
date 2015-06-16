var makeCrazyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.dancing = true;
  this.$node.addClass('crazy')

};

makeCrazyDancer.prototype = Object.create(makeDancer.prototype);
makeCrazyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  var oldStep = makeDancer.prototype.step.bind(this);
  oldStep();
  this.border = this.$node.css('border');
  if(this.dancing) {
    this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
  }
  this.$node.css('border', '10px solid #' + (Math.random() * 0xFFFFFF<<0).toString(16));
  $('.crazy').animate({borderWidth:'15px'})


}

makeCrazyDancer.prototype.lineUp = function(top) {
  //Stops slidy dancer from moving when it lines up.
  this.dancing = false;
  this.setPosition(top, 100);
};
