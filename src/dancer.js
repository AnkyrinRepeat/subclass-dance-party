// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.setPosition(top, left);
  this.step();
  // this.mouseStuff.bind(this);
  this.$node.mouseover(this.mouseStuff.bind(this));
};

makeDancer.prototype.mouseStuff = function () {
  this.$node.css('border', '10px solid blue');
};

makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var otherThanThis = this;
  setTimeout(function(){
    otherThanThis.step();
  }
    , this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(top) {
  // debugger;
  this.setPosition(top, '100px');
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
