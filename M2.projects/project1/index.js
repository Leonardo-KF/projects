var mood = 0;
const button1 = document.getElementById("button1");
button1.addEventListener("click", updateButton);
function updateButton() {
  mood++;
  console.log(mood);
  if (mood == 1) {
    document.getElementById("iframe1").src =
      "https://giphy.com/embed/azUBCBFSCyNgc";
    document.getElementById("text").innerText = "Mood: Laziness";
  } else if (mood == 2) {
    document.getElementById("iframe1").src =
      "https://giphy.com/embed/3o9bJX4O9ShW1L32eY";
    document.getElementById("text").innerText = "Mood: Angry";
  } else if (mood == 3) {
    document.getElementById("iframe1").src =
      "https://giphy.com/embed/l22ysLe54hZP0wubek";
    document.getElementById("text").innerText = "Mood: Despair";
  } else if (mood == 4) {
    document.getElementById("iframe1").src =
      "https://giphy.com/embed/fBG7UnBi7QtePFHEnk";
    document.getElementById("text").innerText = "Mood: Mocking";
  } else if (mood == 5) {
    document.getElementById("iframe1").src =
      "https://giphy.com/embed/8FVEaTui9MLNjBdjBm";
    document.getElementById("text").innerText = "Mood: INSANE!!!";
  } else if (mood == 6) {
    document.getElementById("iframe1").src =
      "https://giphy.com/embed/57ZvMMkuBIVMlU88Yh";
    document.getElementById("text").innerText = "Mood: OMG";
  } else if (mood == 7) {
    document.getElementById("iframe1").src =
      "https://giphy.com/embed/2shcp5tWbz1rIk1dUR";
    document.getElementById("text").innerText = "Mood: Sarcastic";
  } else if (mood == 8) {
    document.getElementById("iframe1").src =
      "https://giphy.com/embed/WiM5K1e9MtEic";
    document.getElementById("text").innerText = "Mood: Relax";
  } else {
    document.getElementById("iframe1").src =
      "https://giphy.com/embed/bbJzFFikFRNy1nCkQt";
    document.getElementById("text").innerText = "Mood: Euphoric";
    mood = 0;
  }
}
