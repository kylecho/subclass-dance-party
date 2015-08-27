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

  $('.addBananaDancerButton').on("click", function(){
    var bananaDancer = new makeBananaDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      25
    );
    window.dancers.push(bananaDancer);
    $('body').append(bananaDancer.$node);
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

