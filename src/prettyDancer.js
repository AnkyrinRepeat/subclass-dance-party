var makePrettyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pretty')

};

makePrettyDancer.prototype = Object.create(makeDancer.prototype);
makePrettyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  var oldStep = makeDancer.prototype.step.bind(this);
  this.border = this.$node.css('border');
  oldStep();

  //Change the color of the dancer to a random color
  this.$node.css('border', '10px solid #' + (Math.random() * 0xFFFFFF<<0).toString(16));

  this.$node.fadeToggle();
  $('.pretty').animate({borderWidth:'15px'})


}


