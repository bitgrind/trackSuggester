$(function(){
  var rubyTrack     = "<div class='well track-info'><h2>Ruby &amp; Rails Track</h2><h4>Average Starting Salay: $46,000</h4><p onclick='showMoreInfo(this)'>Click for more information about Ruby on Rails</p><p class='track-more-info'>A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.</p></div>";
  var cSharpTrack   = "<div class='well track-info'><h2>C# &amp; .Net Track</h2><h4>Average Starting Salay: $40,000</h4><p onclick='showMoreInfo(this)'>Click for more information about C# and .Net</p><p class='track-more-info'>A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.</p></div>";
  var javaTrack     = "<div class='well track-info'><h2>Java &amp; Android Track</h2><h4>Average Starting Salay: $47,000</h4><p onclick='showMoreInfo(this)'>Click for more information about Java and Andriod</p><p class='track-more-info'>A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.</p></div>";
  var phpTrack      = "<div class='well track-info'><h2>PHP &amp; Drupal Track</h2><h4>Average Starting Salay: $40,000</h4><p onclick='showMoreInfo(this)'>Click for more information about PHP and Drupal</p><p class='track-more-info'>A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.</p></div>";
  var designTrack   = "<div class='well track-info'><h2>CSS &amp; Design Track</h2><h4>Average Starting Salay: $35,000</h4><p onclick='showMoreInfo(this)'>Click for more information about CSS and Design</p><p class='track-more-info'>A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.</p></div>";

  function slowShow(a,b,c,d) {
    setTimeout(function(){
      $("#track").append(a,b,c,d);
    },1000);
  }

  function showMoreInfo(x){
    console.log(x);
    $(this).siblings('p.track-more-info').slideToggle();
  };

  function showAnswers(){
    console.log(answerArray);
    var t = $('#track');
    t.show(500);
    if(answerArray[0] = "style"){
      if(answerArray[4] == "35k"){
        t.append(designTrack);
        slowShow(phpTrack, javaTrack, cSharpTrack, rubyTrack);
      } else {
        t.append(phpTrack);
        slowShow(designTrack, javaTrack, cSharpTrack, rubyTrack);
      }
    } else if(answerArray[0] = "structure"){
        if(answerArray[1] = "open"){
          if(answerArray[3] == "mobile"){
            t.append(javaTrack);
            slowShow(phpTrack, designTrack, cSharpTrack, rubyTrack);
          }
          if(answerArray[3] == "server"){
            t.append(rubyTrack);
            slowShow(phpTrack, javaTrack, cSharpTrack, designTrack);
          }
      }
      if(answerArray[1] == "closed"){
        if(answerArray[2] == "lgbusiness"){
          if(answerArrayp[4] == "45k") {
            t.append(javaTrack);
            slowShow(cSharpTrack, rubyTrack, phpTrack, designTrack);
          }
          if(answerArray[4] != "45k"){
            t.append(cSharpTrack);
            slowShow(rubyTrack, javaTrack, phpTrack, designTrack);
          }
        }
        if(answerArray[2] = "smbusiness"){
          if(answerArrayp[4] == "45k") {
            t.append(javaTrack);
            slowShow(phpTrack, designTrack, cSharpTrack, rubyTrack);
          }
          if(answerArray[4] != "45k"){
            t.append(designTrack);
            slowShow(phpTrack, javaTrack, rubyTrack, designTrack);
          }
        }
      }
    } //end of if structure
  }//end of showAnswers

  function slideRight(x){
    $(x).animate({left:'120%'},300).addClass('.reset');
    if(answerArray.length == 5){
      showAnswers();
    }
  }
  var questionArray = [];
  var answerArray = [];
  var questionZ = 5;

  $('.question').each(function(){
    $(this).css('z-index',questionZ)
    questionArray.push(this);
    questionZ--;
  });
  $(".question input").click(function(){
    console.log($(this).val());
    answerArray.push($(this).val());
    slideRight($(this).parents('.question'));
  });
});

function showMoreInfo(x){
  console.log($(x).siblings());
  $(x).siblings('p.track-more-info').slideToggle();
};
