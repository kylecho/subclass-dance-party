var Dancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  this.setPosition(top,left);
};

Dancer.prototype.step = function(){
  // debugger;
  setTimeout( this.step.bind(this) , this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(top){
  this.savedStep = this.step;
  this.step = null;
  var styleSettings = {
    top: top
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lissajous = function(){
  var height = $("body").height();
  var width = $("body").width();

  var phase = Math.PI * 0.5;
  var cx = 300;
  var cy = 600;
  var a = Math.min(cx, cy) - 1 * 0.5;
  this.t = this.t + 10;

  this.top = cx + a * Math.sin((5) * this.t * 0.0005);
  this.left = cy + a * Math.sin((6) * this.t * 0.0005 + phase);

  console.log(this.top, this.left, this.t);
  this.setPosition(this.top, this.left);
};

Dancer.prototype.circle = function(){
  
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

Dancer.prototype.triangle = function(){
  
  var height = $("body").height();
  var width = $("body").width();

  if(this.top < 0){ // top boundary
    this.setPosition(this.top + 5, this.left);
  }else if(this.top > 700){ // bottom boundary
    this.setPosition(this.top - 5, this.left);
  }else if(this.left < 0){ // left boundary
    this.setPosition(this.top, this.left + 10);
  }else if(this.left > 1900){ // right boundary
    this.setPosition(this.top, this.left - 10);
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

Dancer.prototype.rectangle = function() {
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