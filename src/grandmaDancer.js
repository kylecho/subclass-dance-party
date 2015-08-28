var GrandmaDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class="grandma" src="img/granma.gif" />');
  this.$node.hover(
    function() {
      $( this ).velocity({ scale: 3});
    }, function() {
      $( this ).velocity({ scale: 1});
    }
  );
};

GrandmaDancer.prototype = Object.create(Dancer.prototype);
GrandmaDancer.prototype.constructor = GrandmaDancer;

GrandmaDancer.prototype.step = function(){
  $('.grandma').velocity({ rotateZ: 20, scaleX: 0.7 })
    .velocity("reverse")
    .velocity({ rotateZ: -20, scaleX: 0.7 })
    .velocity("reverse");
  this.triangle();
  
  this.oldStep();
};
