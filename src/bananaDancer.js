var BananaDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.t = 0;
  this.$node.prepend('<img class="banana" src="img/banana.gif" />');
  this.$node.hover(
    function() {
      $( this ).velocity({ scale: 3});
    }, function() {
      $( this ).velocity({ scale: 1});
    }
  );
};

BananaDancer.prototype = Object.create(Dancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;

BananaDancer.prototype.step = function(){
  // debugger;
  $('.banana').velocity({ rotateZ: 40, scaleX: 0.7 })
    .velocity("reverse")
    .velocity({ rotateZ: -40, scaleX: 0.7 })
    .velocity("reverse");
  this.lissajous();
  
  this.oldStep();
};
