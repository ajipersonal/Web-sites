var player1 = Math.floor(Math.random()*6)+1;
var player2 = Math.floor(Math.random()*6)+1;

var imgName1 = "images/dice"+player1+".png";
var imgName2 = "images/dice"+player2+".png";

document.querySelector(".img1").src=imgName1;
document.querySelector(".img2").src=imgName2;
// alert (document.querySelector(".img1"));
  // alert (player1 +" " +player2);

var winMessage;

if (player1 > player2){

  winMessage = "Player 1 wins!";
  // alert ("In first");
  document.querySelector(".container .myh1").innerText="Player 1 wins! 🎈";

} else if (player2 > player1){
  winMessage = "Player 2 wins!";
  document.querySelector(".container .myh1").innerText="🎈Player 2 wins!";
  // alert ("In second");
} else {
  document.querySelector(".container .myh1").innerText="Its a draw! 🎈";
}
