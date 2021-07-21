// Тоглогчын ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчыг 0, хоёрдугаар тоглогчыг 1 гэж тэмдэглэе
var activePlayer = 0;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Ээлжийн оноог цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусныг хадглах хувьсагч хэрэгтэй, 1ээс 6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
//Програм эхлэхэд бэлэн болгох
document.getElementById("score-1").textContent = "0";
document.getElementById("score-0").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none"; // haragdahgui bolgoj bna
//shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  diceDom.style.display = "block"; //shoonii zurgiig web der haragddag bolgo bna
  // 1 oos 6 hurtel sanamsargui tiig gargana
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";
  //buusan too ni 1 ee ylgaatai bol tologchiin eeljiin onoog nemegduulne.

  if (diceNumber !== 1) {
    //1 ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
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
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  scores[activePlayer] += roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  document.getElementById("current-" + activePlayer).textContent = "0";
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //active player iig shiljuuleh code
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.toggle("active");
  roundScore = 0;
  diceDom.style.display = "none";
});
