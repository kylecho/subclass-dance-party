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
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(top){
  this.savedStep = this.step;
  this.step = null;
  var styleSettings = {
    top: top
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.circle = function(){
  
  var height = $("body").height();
  var width = $("body").width();

  if(this.top < 0){ // top boundary
    this.setPosition(this.top + 5, this.left);
  }else if(this.top > 700){ // bottom boundary
    this.setPosition(this.top - 5, this.left);
  }else if(this.left < 0){ // left boundary
    this.setPosition(this.top, this.left + 5);
  }else if(this.left > 1900){ // right boundary
    this.setPosition(this.top, this.left - 5);
  }

  if (this.top < height/2) { // top half
    if(this.left < width/2){ // top left quadrant
      this.setPosition(this.top - 5, this.left + 5);
    }else{ // top right quadrant
      this.setPosition(this.top + 5, this.left + 5);
    }
  } else if (this.top >= height/2) { // bottom half
    if (this.left < width/2) { // botoom left quadrant
      this.setPosition(this.top - 5, this.left - 5);
    } else { // borrom right quadrant
      this.setPosition(this.top + 5, this.left - 5);
    }
  }
};

makeDancer.prototype.rectangle = function() {
  var height = $("body").height();
  var width = $("body").width();

  if(this.top < 0){ // top boundary
    this.setPosition(this.top + 5, this.left);
  }else if(this.top > 700){ // bottom boundary
    this.setPosition(this.top - 5, this.left);
  }else if(this.left < 0){ // left boundary
    this.setPosition(this.top, this.left + 5);
  }else if(this.left > 1900){ // right boundary
    this.setPosition(this.top, this.left - 5);
  }

  if (this.top < height/2) { // top half
    if(this.left < width/2){ // top left quadrant
      this.setPosition(this.top, this.left + 5);
    }else{ // top right quadrant
      this.setPosition(this.top + 5, this.left);
    }
  } else if (this.top >= height/2) { // bottom half
    if (this.left < width/2) { // botoom left quadrant
      this.setPosition(this.top - 5, this.left);
    } else { // borrom right quadrant
      this.setPosition(this.top, this.left - 5);
    }
  }
};