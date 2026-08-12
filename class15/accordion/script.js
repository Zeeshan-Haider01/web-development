let questions = document.querySelectorAll(".question");

for (let i = 0; i < questions.length; i++) {

    questions[i].addEventListener("click", function () {
        let answer = questions[i].nextElementSibling;
        let isOpen = answer.style.display === "block";
        
        for (let j = 0; j < questions.length; j++) {
            questions[j].nextElementSibling.style.display = "none";
            questions[j].querySelector("span").textContent = "+";
        }

        if (!isOpen) {
            answer.style.display = "block";
            questions[i].querySelector("span").textContent = "-";
        }

    });

}