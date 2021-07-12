// Тоглогчын ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчыг 0, хоёрдугаар тоглогчыг 1 гэж тэмдэглэе
var activePlayer = 1;

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

document.querySelector(".btn-roll").addEventListener("click", function () {
  diceDom.style.display = "block"; //haragddag bolgo bna
  // 1 oos 6 hurtel sanamsargui tiig gargana
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.src = "dice-" + diceNumber + ".png";
  if (activePlayer === 0) {
    roundScore += diceNumber;
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (activePlayer === 0) {
    document.getElementById("current-0").textContent = "roundScore";
  }
});
