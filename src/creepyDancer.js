var makeCreepyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

makeCreepyDancer.prototype = Object.create(makeDancer.prototype);
makeCreepyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  var oldStep = makeDancer.prototype.step.bind(this);
  oldStep();
  var victim;
  var shortestDistance = 1000;
  var dancers = window.dancers;

  for (var i = 0; i<dancers.length; i++) {

    var dancerTop = Number(dancers[i].$node.css('top').slice(0, dancers[i].$node.css('top').length-2));
    var thisTop = Number(this.$node.css('top').slice(0, this.$node.css('top').length-2));
    var dancerLeft = Number(dancers[i].$node.css('left').slice(0, dancers[i].$node.css('left').length-2));
    var thisLeft = Number(this.$node.css('left').slice(0, this.$node.css('left').length-2));

    var distance = Math.pow(Math.pow((dancerTop-thisTop), 2) + Math.pow((dancerLeft-thisLeft), 2), 0.5);
    if (distance < shortestDistance) {
      if(dancers[i] !== this) {
        shortestDistance = distance;
        victim = dancers[i]
      }
    }
  }

  var newTop = function(){
    if (thisTop > dancerTop) {
      return (thisTop-dancerTop)/2 + dancerTop;
    } else {
      return (dancerTop-thisTop)/2 + thisTop;
    }
  }

  var newLeft = function(){
    if (thisLeft > dancerLeft) {
      return (thisLeft-dancerLeft)/2 + dancerLeft
    } else {
      return (dancerLeft-thisLeft)/2 + thisLeft
    }
  }
  var top = newTop.bind(this)();
  var left = newLeft.bind(this)();

  this.setPosition(top, left);
}
