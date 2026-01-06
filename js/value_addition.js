let current = 0;
let answers = [];
let questions = [];

// Load all questions on page load
document.addEventListener("DOMContentLoaded", () => {
  questions = document.querySelectorAll(".question");
  if (questions.length > 0) {
    questions[0].classList.add("active");
  }
});

// Handle answer click
function answer(value) {
  answers.push(value);

  // Hide current question
  questions[current].classList.remove("active");
  current++;

  // Show next question OR show result
  if (current < questions.length) {
    questions[current].classList.add("active");
  } else {
    showResult();
  }
}

// Show final MBTI result
function showResult() {
  const mbti = calculateMBTIFromAnswers(answers);
  const info = personalityInfo[mbti];

  document.getElementById("result").innerHTML = `
    <h2> Your MBTI Personality Type is</h2>
    <div class="mbti-type">${mbti}</div>
    <h3>${info.title}</h3>
    <img src="${info.image}" height = "250px" alt="${mbti} Image" class="personality-image"/>
    <div class="section">
      <h4>Description</h4>
      <p>${info.description}</p>
    </div>

    <div class="two-column">
  <div class="section">
    <h4>Strengths</h4>
    <ul>
      ${info.strengths.map(s => `<li>${s}</li>`).join("")}
    </ul>
  </div>

  <div class="section">
    <h4>Opportunities</h4>
    <ul>
      ${info.opportunities.map(o => `<li>${o}</li>`).join("")}
    </ul>
  </div>
</div>
<div class="retake">
  <a href="introduction.html">
    <button class="btn btn-info">Retake Quiz</button>
  </a>
</div>`;

}
