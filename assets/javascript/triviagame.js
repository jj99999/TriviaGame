//javascript for Trivia Game



var count=30;

var counter=setInterval(timer, 1000);

function countDown(){
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     alert("Time's up!");
     return;
  }

  	document.getElementById("timer").innerHTML=count + " secs";
}









		

	

