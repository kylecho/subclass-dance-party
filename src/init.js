$(document).ready(function(){
  window.dancers = [];
  window.gifs = ['banana','granma','man','women','stick','pinkbear','rainbow','rat'];

  $(".addDancerButton").on("click", function(event){
    var dancer = new makeBlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.addSquareDancerButton').on("click", function(){
    var squareDancer = new makeSquareDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(squareDancer);
    $('body').append(squareDancer.$node);
    $(squareDancer.$node).prepend('<img src="img/banana.gif" />');
  });

  $('.addBigDancerButton').on("click", function(){
    var bigDancer = new makeBigDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(bigDancer);
    $('body').append(bigDancer.$node);
  });

  // line dancers up
  $('.lineUpDancerButton').on("click", function(){
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp($("body").height()/2);
    }
  });  

  $('.randomDancerButton').on("click", function(){
    var randomDancer = new makeDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(randomDancer);
    $('body').append(randomDancer.$node);
    $(randomDancer.$node).prepend('<img src="img/' + window.gifs[Math.floor(Math.random() * window.gifs.length)] + '.gif" />');
  });

});

