var makeClassDancer = function(top, left, timeBetweenSteps){
  var dancer = this;
  makeDancer.call(dancer, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var classArray = ['class0','class1','class2','class3','class4','class5','class6'
   ,'class7','class8','class9','class10','class11','class12','class13','class14',
   'class15','class16','class17','class18','class19','class20','class21' ];
  this.dancing = true;
  this.$node.addClass('classDancer')
  this.$node.addClass('class'+Math.floor(Math.random()*(21)));
};

makeClassDancer.prototype = Object.create(makeDancer.prototype);
makeClassDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  var oldStep = makeDancer.prototype.step.bind(this);
  oldStep();
  if(this.dancing) {
    this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
  }
}
makeClassåDancer.prototype.lineUp = function(top) {
  //Stops slidy dancer from moving when it lines up.
  this.dancing = false;
  this.setPosition(top, 100);
}

