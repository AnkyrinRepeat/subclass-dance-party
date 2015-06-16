var makeCreepyDancer = function(top, left, timeBetweenSteps){
  var dancer = this;
  makeDancer.call(dancer, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

makeCreepyDancer.prototype = Object.create(makeDancer.prototype);
makeCreepyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  var oldStep = makeDancer.prototype.step.bind(this);
  oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var dancers = window.dancers
  var victim;
  var shortestDistance;

  for (var i = 0; i<dancers.length; i++) {
    var distance = ((dancers[i].$node.css('top')-this.$node.css('top'))^2 +
     ((dancers[i].$node.css('left')-this.$node.css('left'))^2)^0.5);
    if (distance < shortestDistance) {
      if(distance !== 0) {
        shortestDistance = distance;
        victim = dancers[i]
      }
    }
  }
}
