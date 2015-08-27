var makeBananaDancer = function(top, left, timeBetweenSteps){

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('square');
  this.$node.prepend('<img class="banana" src="img/banana.gif" />');
  this.$node.hover(
    function() {
      debugger;
      $( this ).velocity({ scale: 3});
    }, function() {
      $( this ).velocity({ scale: 1});
    }
  );
};

makeBananaDancer.prototype = Object.create(makeDancer.prototype);
makeBananaDancer.prototype.constructor = makeBananaDancer;

makeBananaDancer.prototype.step = function(){
  // debugger;
  $('.banana').velocity({ rotateZ: 40, scaleX: 0.7 })
    .velocity("reverse")
    .velocity({ rotateZ: -40, scaleX: 0.7 })
    .velocity("reverse");
  this.circle();
  
  this.oldStep();
};
