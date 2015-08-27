var makeDancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.oldStep = makeDancer.prototype.step;
  this.oldStep();
  this.setPosition(top,left);
};

makeDancer.prototype.step = function(){
  // debugger;
  setTimeout( this.step.bind(this) , this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(top){
  var styleSettings = {
    top: top
  };
  this.$node.css(styleSettings);
};

