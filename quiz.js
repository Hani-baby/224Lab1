const quizData = [
    {
      question: "What is the capital of Canada?",
      options: ["Kelowna", "Toronto", "Vancouver", "Ottawa"],
      answer: 1,
    },
    {
      question: "Who is America's Current President?",
      options: ["Haniel", "Obama", "D.Trump", "Biden"],
      answer: 2,
    },
    {
      question: "What is GitHub used for?",
      options: [
        "Coding and project management through collaboration",
        "Uploading stuff for the world to see",
        "Making pictures and sending memes",
        "Driving assistant",
      ],
      answer: 0,
    },
    {
      question: "How old are you?",
      options: ["21", "24", "40", "none of the above"],
      answer: 3,
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextButton = document.getElementById("nextButton");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  const totalEl = document.getElementById("total");
  const restartBtn = document.getElementById("restartButton");
  const quizDiv = document.getElementById("quiz");
  
  function loadQuestion() {
    const currentData = quizData[currentQuestion];
    questionEl.textContent = currentData.question;
    optionsEl.innerHTML = "";
  
    currentData.options.forEach((option, index) => {
      const li = document.createElement("li");
      const label = document.createElement("label");
      const input = document.createElement("input");
  
      input.type = "radio";
      input.name = "option";
      input.value = index;
  
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
  
      li.appendChild(label);
      optionsEl.appendChild(li);
    });
  
    if (currentQuestion === quizData.length - 1) {
      nextButton.textContent = "Submit";
    } else {
      nextButton.textContent = "Next";
    }
  }
  
  function showResult() {
    quizDiv.classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = score;
    totalEl.textContent = quizData.length;
  }
  
  nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }
  
    const answer = parseInt(selectedOption.value);
    if (answer === quizData[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    resultEl.classList.add("hidden");
    quizDiv.classList.remove("hidden");
    loadQuestion();
  });
  
  loadQuestion();
  