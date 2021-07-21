//togloom duussan esehig hadgaldag huvisagch
var isGameOver;
// Тоглогчын ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчыг 0, хоёрдугаар тоглогчыг 1 гэж тэмдэглэе
var activePlayer = 0;
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [];
//Ээлжийн оноог цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore;
var diceDom = document.querySelector(".dice");
newGame();

function newGame() {
  //togloom ehellee gedeg tolovt oruulna
  isGameOver = false;
  //Шооны аль талаараа буусныг хадглах хувьсагч хэрэгтэй, 1ээс 6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
  //Програм эхлэхэд бэлэн болгох

  document.getElementById("name-" + activePlayer).textContent =
    "PLAYER " + (activePlayer + 1);
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  document.getElementById("score-1").textContent = "0";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  diceDom.style.display = "none"; // haragdahgui bolgoj bna
}
//shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver === false) {
    diceDom.style.display = "block"; //shoonii zurgiig web der haragddag bolgo bna
    // 1 oos 6 hurtel sanamsargui tiig gargana
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne
    diceDom.src = "dice-" + diceNumber + ".png";
    //buusan too ni 1 ee ylgaatai bol tologchiin eeljiin onoog nemegduulne.

    if (diceNumber !== 1) {
      //1 ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
      roundScore += diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Game is over, click NEW GAME ");
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isGameOver === false) {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    //ug toglogchiin hojson esehiig shalgah
    if (scores[activePlayer] >= 100) {
      document.getElementById("name-" + activePlayer).textContent = "WINNER";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.toggle("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.toggle("active");
      //togloomiig dussan tolovt oruulna

      document.getElementById("current-" + activePlayer).textContent = "0";
      isGameOver = true;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Game is over, click NEW GAME ");
  }
});
document.querySelector(".btn-new").addEventListener("click", newGame);
function switchToNextPlayer() {
  //1 буусан тул тоглогчын ээлжийг энэ хэсэгт сольж өгнө.
  document.getElementById("current-" + activePlayer).textContent = "0";
  roundScore = 0;
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //active player iig shiljuuleh code
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");
  diceDom.style.display = "none";
}
