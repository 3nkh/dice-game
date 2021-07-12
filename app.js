// Тоглогчын ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчыг 0, хоёрдугаар тоглогчыг 1 гэж тэмдэглэе
var activePlayer = 1;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Ээлжийн оноог цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусныг хадглах хувьсагч хэрэгтэй, 1ээс 6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;
// 1 oos 6 hurtel sanamsargui tiig gargana

console.log("Шоо :" + diceNumber);
//Програм эхлэхэд бэлэн болгох
document.querySelector("#score-1").textContent = 0;
document.querySelector("#score-0").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";
