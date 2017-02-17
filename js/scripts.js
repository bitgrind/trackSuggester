$(function(){
  var rubyTrack     = "<div class='well track-info'><h2>Ruby &amp; Rails Track</h2><h4>Average Starting Salay: $46,000</h4><p onclick='showMoreInfo(this)'>Click for more information about Ruby on Rails</p><p class='track-more-info'>A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.</p></div>";
  var cSharpTrack   = "<div class='well track-info'><h2>C# &amp; .Net Track</h2><h4>Average Starting Salay: $40,000</h4><p onclick='showMoreInfo(this)'>Click for more information about C# and .Net</p><p class='track-more-info'>C# is a modern, general purpose, object-oriented programming language designed around the Common Language Infrastructure. A great C# developer is capable of handling many aspects of developing an application, including but not limited to performance, scalability, security, testing, and more. C# developers can develop modern applications that run on desktop computers, or even sophisticated back-end processes powering modern web applications. The frameworks .Net and Mono combined allow a wide range of platforms to be targeted by applications developed with C#.</p></div>";
  var javaTrack     = "<div class='well track-info'><h2>Java &amp; Android Track</h2><h4>Average Starting Salay: $47,000</h4><p onclick='showMoreInfo(this)'>Click for more information about Java and Andriod</p><p class='track-more-info'>Java Developer Job Description. Salary.com. Designs, develops, and implements web-based Java applications to support business requirements. Follows approved life cycle methodologies, creates design documents, and performs program coding and testing.</p></div>";
  var phpTrack      = "<div class='well track-info'><h2>PHP &amp; Drupal Track</h2><h4>Average Starting Salay: $40,000</h4><p onclick='showMoreInfo(this)'>Click for more information about PHP and Drupal</p><p class='track-more-info'>PHP is a general-purpose scripting language that is especially suited to server-side web development, in which case PHP generally runs on a web server. Any PHP code in a requested file is executed by the PHP runtime, usually to create dynamic web page content or dynamic images used on websites or elsewhere.</p></div>";
  var designTrack   = "<div class='well track-info'><h2>CSS &amp; Design Track</h2><h4>Average Starting Salay: $35,000</h4><p onclick='showMoreInfo(this)'>Click for more information about CSS and Design</p><p class='track-more-info'>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.</p></div>";

  function slowShow(a,b,c,d) {
    setTimeout(function(){
      $("#track").append(a,b,c,d);
    },500);
  }

  function showMoreInfo(x){
    console.log(x);
    $(this).siblings('p.track-more-info').slideToggle();
  };

  function showAnswers(){
    console.log(answerArray);
    var t = $('#track');
    t.show(500);
    if(answerArray[0] == "style"){
      if(answerArray[4] == "35k"){
        t.append(designTrack);
        slowShow(phpTrack, javaTrack, cSharpTrack, rubyTrack);
      } else {
        t.append(phpTrack);
        slowShow(designTrack, javaTrack, cSharpTrack, rubyTrack);
      }
    } else if(answerArray[0] == "structure"){
        console.log("structure");
        if(answerArray[1] == "opensource"){
          if(answerArray[3] == "mobiledev" && answerArray[4] == "45k"){
            t.append(javaTrack);
            slowShow(phpTrack, designTrack, cSharpTrack, rubyTrack);
          } else {
            t.append(phpTrack);
            slowShow(designTrack, javaTrack, cSharpTrack, rubyTrack);
          }
          if(answerArray[3] == "server"){
            t.append(rubyTrack);
            slowShow(phpTrack, javaTrack, cSharpTrack, designTrack);
          }
        }
        if(answerArray[1] == "closedsource"){
          console.log("closed");
          if(answerArray[2] == "lrgbusiness"){
            if(answerArray[4] == "45k") {
              t.append(javaTrack);
              slowShow(rubyTrack, cSharpTrack, phpTrack, designTrack);
            }
            if(answerArray[4] != "45k"){
              t.append(cSharpTrack);
              slowShow(rubyTrack, javaTrack, phpTrack, designTrack);
            }
          }
          if(answerArray[2] == "smbusiness"){
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
