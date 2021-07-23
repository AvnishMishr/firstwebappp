function CalcScore() { 
  var P1score=0;
  P1score  = P1score + document.getElementById("Q1P1").value * document.getElementById("Q1P1").value ;
  P1score  = P1score + document.getElementById("Q2P1").value * document.getElementById("Q2P1").value ;
  P1score  = P1score + document.getElementById("Q3P1").value * document.getElementById("Q3P1").value ;
  P1score  = P1score + document.getElementById("Q4P1").value * document.getElementById("Q4P1").value ;
  P1score  = P1score + document.getElementById("Q5P1").value * document.getElementById("Q5P1").value ;
  //alert(P1score);
  document.getElementById("score1").innerHTML=P1score;

  var P2score=0;
  P2score  = P2score + document.getElementById("Q1P2").value * document.getElementById("Q1P2").value ;
  P2score  = P2score + document.getElementById("Q2P2").value * document.getElementById("Q2P2").value ;
  P2score  = P2score + document.getElementById("Q3P2").value * document.getElementById("Q3P2").value ;
  P2score  = P2score + document.getElementById("Q4P2").value * document.getElementById("Q4P2").value ;
  P2score  = P2score + document.getElementById("Q5P2").value * document.getElementById("Q5P2").value ;
  //alert(P2score);
  document.getElementById("score2").innerHTML=P2score;

  var P3score=0;
  P3score  = P3score + document.getElementById("Q1P3").value * document.getElementById("Q1P3").value ;
  P3score  = P3score + document.getElementById("Q2P3").value * document.getElementById("Q2P3").value ;
  P3score  = P3score + document.getElementById("Q3P3").value * document.getElementById("Q3P3").value ;
  P3score  = P3score + document.getElementById("Q4P3").value * document.getElementById("Q4P3").value ;
  P3score  = P3score + document.getElementById("Q5P3").value * document.getElementById("Q5P3").value ;
  //alert(P3score);
  document.getElementById("score3").innerHTML=P3score;

  

  }

  function mySubmit(){
    $("#header").show();
    // $("#front").hide();

  }
