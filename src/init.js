$(document).ready(function(){
  window.dancers = [];
  window.gifs = ['rainbow','rat'];
  //window.gifs = ['banana','granma','man','stick','pinkbear','rainbow','rat'];

  $(".addGrandmaDancerButton").on("click", function(event){
    var grandmaDancer = new GrandmaDancer(
      $("body").height() * Math.random() - 100,
      $("body").width() * Math.random() -100,
      10
    );
    window.dancers.push(grandmaDancer);
    $('body').append(grandmaDancer.$node);
  });

  $('.addBananaDancerButton').on("click", function(){
    var bananaDancer = new BananaDancer(
      $("body").height() * Math.random() -100,
      $("body").width() * Math.random() -100,
      30
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
    var randomDancer = new Dancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(randomDancer);
    $('body').append(randomDancer.$node);
    $(randomDancer.$node).prepend('<img src="img/' + window.gifs[Math.floor(Math.random() * window.gifs.length)] + '.gif" />');
  });

  $('.findPartnerButton').on("click", function(){
    //iterate through dancers
    for (var i = 0; i < window.dancers.length; i += 2) {
      //set dancers position: top are the same and left are within 25 of each other
      var top = window.dancers[i+1].top;
      var left = window.dancers[i+1].left;
      window.dancers[i].setPosition(top, left + 50);
    }
  });


});

