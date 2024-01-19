const faqQuestion = document.querySelectorAll("h4");
faqQuestion.forEach((question) => {
  question.addEventListener("click", () => {
    faqQuestion.forEach((questionCheck) => {
      if (questionCheck != question) {
        questionCheck.nextElementSibling.style.display = "none";
        questionCheck.firstElementChild.src = "./assets/images/icon-minus.svg";
      }
    });
    if (question.nextElementSibling.style.display === "none") {
      question.nextElementSibling.style.display = "block";
      question.firstElementChild.src = "./assets/images/icon-plus.svg";
    } else {
      question.nextElementSibling.style.display = "none";
      question.firstElementChild.src = "./assets/images/icon-minus.svg";
    }
  });
});

let currentIndex = 0;

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 38) {
    hideCurrentAndMove(-1);
  } else if (e.keyCode === 40) {
    hideCurrentAndMove(1);
  }
});

const hideCurrentAndMove = (direction) => {
  faqQuestion[currentIndex].nextElementSibling.style.display = "none";
  faqQuestion[currentIndex].firstElementChild.src =
    "./assets/images/icon-minus.svg";

  currentIndex =
    (currentIndex + direction + faqQuestion.length) % faqQuestion.length;

  faqQuestion[currentIndex].nextElementSibling.style.display = "block";
  faqQuestion[currentIndex].firstElementChild.src =
    "./assets/images/icon-plus.svg";
};
