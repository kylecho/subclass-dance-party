var makeDancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');

  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.oldStep = makeDancer.prototype.step;
  this.step();
};


makeDancer.prototype.step = function(){
  // debugger;
  setTimeout( makeBlinkyDancer.prototype.step.bind(this) , this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};