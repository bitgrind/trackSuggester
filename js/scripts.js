$(function(){
  var rubyTrack     = "<div class='well'><h2>Ruby &amp; Rails Track</h2><h3>Average Starting Salay:$46,000</h3><p>Information about Ruby on Rails</p></div>";
  var cSharpTrack   = "<div class='well'><h2>C# &amp; .Net Track</h2><h3>Average Starting Salay:$40,000</h3><p>Information about C# and .Net</p></div>";
  var javaTrack     = "<div class='well'><h2>Java &amp; Android Track</h2><h3>Average Starting Salay:$47,000</h3><p>Information about Java and Andriod</p></div>";
  var phpTrack      = "<div class='well'><h2>PHP &amp; Drupal Track</h2><h3>Average Starting Salay:$40,000</h3><p>Information about PHP and Drupal</p></div>";
  var designTrack   = "<div class='well'><h2>CSS &amp; Design Track</h2><h3>Average Starting Salay:$35,000</h3><p>Information about CSS and Design</p></div>";

  function slowShow(a,b,c,d) {
    setTimeout(function(){
      $("#track").append(a,b,c,d);
    },1000);
  }

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
            t.append(phpTrack);
            slowShow(javaTrack, cSharpTrack, rubyTrack, designTrack);
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
