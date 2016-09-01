//javascript for Trivia Game


var count=10;

var counter=setInterval(countDown, 1000);

var correctCount=0;


function countDown()
{
  count=count-1;
  console.log(count);
  if (count <= 0)
  {
    $(".panel-title").html("Time's Up!")
    clearInterval(counter);
    $("input[type=radio]").attr('disabled', true);
    $("#results").html(correctCount + " correct answers!")
  }
  $("#timer").html(count + " seconds left");
}


function answerCheck()
{

  $('#answer1').click(function ()
  {
    correctCount++;
    if (this.id == 'answer1')
    {
      $("#response1").html("That's right! Wrangell-St Elias is over 8 million acres!");
    }  
  });

  $('#answer2').click(function ()
  {
    correctCount++;
    if (this.id == 'answer2')
    {
      $("#response2").html("That's right! President Wilson created the National Park Service in 1916.");
    }  
  });

  $('#answer3').click(function ()
  {
    correctCount++;
    if (this.id == 'answer3')
    {
      $("#response3").html("Trick question! You can find all these things in National Parks!");
    }  
  });

  $('#answer4').click(function ()
  {
    correctCount++;
    if (this.id == 'answer4')
    {
      $("#response3").html("Trick question! You can find all these things in National Parks!");
    }  
  });

  $('#answer5').click(function ()
  {
    correctCount++;
    if (this.id == 'answer5')
    {
      $("#response3").html("Trick question! You can find all these things in National Parks!");
    }  
  });

}


countDown();
answerCheck();