let history = [];

function reflectDay() {
  const mood = +moodVal();
  const energy = +energyVal();
  const focus = +focusVal();
  const note = document.getElementById("note").value;

  const score = Math.round((mood + energy + focus) / 3);

  document.getElementById("score").textContent = score;

  document.getElementById("ring").style.background =
    `conic-gradient(#22d3ee ${score * 3.6}deg, #111 0deg)`;

  document.getElementById("moodCard").children[1].textContent = mood;
  document.getElementById("energyCard").children[1].textContent = energy;
  document.getElementById("focusCard").children[1].textContent = focus;

  let msg = score > 70 ? "Great day 🌟" :
            score > 40 ? "Balanced day 🌤️" :
            "Heavy day 🌧️";

  document.getElementById("message").textContent = msg;

  history.unshift(`(${score}) ${note}`);
  history = history.slice(0, 3);

  const list = document.getElementById("historyList");
  list.innerHTML = history.map(h => `<li>${h}</li>`).join("");
}

function moodVal(){ return document.getElementById("mood").value }
function energyVal(){ return document.getElementById("energy").value }
function focusVal(){ return document.getElementById("focus").value }
