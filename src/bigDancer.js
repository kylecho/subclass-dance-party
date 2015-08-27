var makeBigDancer = function(top, left, timeBetweenSteps){

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('big');

};

makeBigDancer.prototype = Object.create(makeDancer.prototype);
makeBigDancer.prototype.constructor = makeBigDancer;

makeBigDancer.prototype.step = function(){
  // debugger;
  this.oldStep();
};
