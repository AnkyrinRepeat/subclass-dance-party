var makeCrazyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.canMoveCrazy = true;
};

makeCrazyDancer.prototype = Object.create(makeDancer.prototype);
makeCrazyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  var oldStep = makeDancer.prototype.step.bind(this);
  oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  this.$node.css('border', '10px solid #' + (Math.random() * 0xFFFFFF<<0).toString(16));
  // this.$node.toggle();
  if(this.canMoveCrazy) {
    this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
  }



}

makeCrazyDancer.prototype.lineUp = function(top) {
  this.canMoveCrazy = false;
  this.setPosition(top, '100px');
};


