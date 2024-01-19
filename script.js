const faqQuestions = document.querySelectorAll("h4");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    faqQuestions.forEach((questionCheck) => {
      if (questionCheck !== question) {
        questionCheck.nextElementSibling.style.display = "none";
        questionCheck.firstElementChild.src = "./assets/images/icon-plus.svg";
      }
    });

    if (question.nextElementSibling.style.display === "none") {
      question.nextElementSibling.style.display = "block";
      question.firstElementChild.src = "./assets/images/icon-minus.svg";
    } else {
      question.nextElementSibling.style.display = "none";
      question.firstElementChild.src = "./assets/images/icon-plus.svg";
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
  faqQuestions[currentIndex].nextElementSibling.style.display = "none";
  faqQuestions[currentIndex].firstElementChild.src =
    "./assets/images/icon-plus.svg";

  currentIndex =
    (currentIndex + direction + faqQuestions.length) % faqQuestions.length;

  faqQuestions[currentIndex].nextElementSibling.style.display = "block";
  faqQuestions[currentIndex].firstElementChild.src =
    "./assets/images/icon-minus.svg";
};
