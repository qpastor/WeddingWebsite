const FAQData = [
    {
        question: ["What is the purpose of this website?"],
        answer: ["This website serves as a central hub for all wedding-related information, including the ceremony details, guest list management, and RSVP functionality.",
            "Answer 2",
            "Answer 3"
        ],
    },
    {
        question: ["How can I contact the couple?"],
        answer: ["This website serves as a central hub for all wedding-related information, including the ceremony details, guest list management, and RSVP functionality.",
        ],
    },
    {
        question: ["Where is the wedding taking place?"],
        answer: ["This website serves as a central hub for all wedding-related information, including the ceremony details, guest list management, and RSVP functionality.",
            "Answer 2",
        ],
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
            <span class="answer-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </span>
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
countdownTimer()
setInterval(countdownTimer, 1000);
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


function openPhotoGallery() {
  const photoInViewContainer = document.querySelector(".photo-in-view");
  const photoInViewImg = photoInViewContainer ? photoInViewContainer.querySelector("img") : null;
  const grid = document.querySelector(".photo-grid");

  if (!grid || !photoInViewImg) {
    // nothing to do if structure is missing
    return;
  }

  // delegate clicks on the grid to update the large view
  grid.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.tagName === "IMG") {
      // swap the src of the main image so the clicked thumbnail becomes the full view
      photoInViewImg.src = target.src;
      photoInViewImg.alt = target.alt || "Photo in view";
    }
  });
}

// initialize gallery behaviour once the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  openPhotoGallery();
});