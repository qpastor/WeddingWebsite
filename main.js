const FAQData = [
    {
        question: ["Am I allowed to bring plus one?"],
        answer: ["Your invitation will be addressed to all invited guests. If your invitation includes 'and Guest,' then you are welcome to bring a plus-one! Otherwise, we are only able to accommodate those listed."
        ],
    },
    {
        question: ["Are taking pictures allowed during ceremony?"],
        answer: ["We would love for you to be fully present with us. Our ceremony will be unplugged, so please refrain from taking photos or videos during the ceremony. We have hired a professional photographer to capture the special moments, and we will share the photos with you after the wedding! ",
        ],
    },
    {
        question: ["What will happen if I don’t RSVP/respond?"],
        answer: ["KINDLY RSVP ON OUR WEDDING WEBSITE ON OR BEFORE MAY 10, 2026. SHOULD WE NOT HEAR FROM YOU BY THEN, WE WILL <Strong>REGRETFULLY ASSUME THAT YOU ARE UNABLE TO JOIN US</Strong>",],
    },
];

const removeAllExpanded = () => {
    const questionContainers = document.querySelectorAll(".faq-container .question-container");
    questionContainers.forEach((q) => {
        q.classList.remove("expanded");
        const answerContainer = q.querySelector(".answer-container");
        answerContainer.style.maxHeight = "0";
    });
};

const FAQContainer = document.querySelector(".faq-container");

const displayFAQ = () => {
    FAQData.forEach((q) => {
        const answerHTML = q.answer.map((a) => `<div class="answer">
            <span class="answer-icon">✔</span>
            ${a}
          </div>`).join("");

        const html = `  <div class="question">
              ${q.question}
              <span class="question-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                </svg>
              </span>
            </div>

            <div class="answer-container">
            ${answerHTML}
            </div>`;

            const questionContainer = document.createElement("div");
            questionContainer.classList.add("question-container");
            questionContainer.innerHTML =html;
            FAQContainer.appendChild(questionContainer);

            const question = questionContainer.querySelector(".question");

            question.addEventListener("click", () => {
              if(!questionContainer.classList.contains("expanded")){
                removeAllExpanded();
              }
            questionContainer.classList.toggle("expanded");

            const answerContainer = questionContainer.querySelector(".answer-container");
            const contentHeight = answerContainer.scrollHeight;
            const isExpanded = questionContainer.classList.contains("expanded");
            answerContainer.style.maxHeight = isExpanded ? `${contentHeight}px` : "0";
          }
            );
    });
};
displayFAQ();



let slideIndex = 0;
let photoSlideIndex = 0;
countdownTimer()
setInterval(countdownTimer, 1000);
showPhotoGallery();
showDivs();



function showDivs() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showDivs.bind(null, slideIndex + 1), 1500);
}


function showPhotoGallery() {
  let i;
  let photoslides = document.getElementsByClassName("photoSlides");
  let photodots = document.getElementsByClassName("photoDot");

  for (i = 0; i < photoslides.length; i++) {
    photoslides[i].style.display = "none";
  }
  photoSlideIndex++;
  if (photoSlideIndex > photoslides.length) {
    photoSlideIndex = 1;
  }
  for (i = 0; i < photodots.length; i++) {
    photodots[i].className = photodots[i].className.replace(" active", "");
  }

  photoslides[photoSlideIndex - 1].style.display = "block";
  photodots[photoSlideIndex - 1].className += " active";
  setTimeout(showPhotoGallery.bind(null, photoSlideIndex + 1), 1500);
}

function countdownTimer() {
    const weddingDate = new Date("May 29, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    //

    //document.getElementById("countdown").innerText = String(days).padStart(2, '0') + " Days " + String(hours).padStart(2, '0') + " Hours " + String(minutes).padStart(2, '0') + " Minutes " + String(seconds).padStart(2, '0') + " Seconds";
 
}