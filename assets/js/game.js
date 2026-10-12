/* 
   LOGIKA GAME (STATE + FUNGSI UTAMA)   
*/

/* STATE MANAGEMENT (VARIABEL GAME) */
let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let selectedOptionIndex = null;
let isAnswerChecked = false;

/* GAME FUNCTIONS */

// 1. Memulai Game berdasarkan kategori yang dipilih
function selectCategory(categoryKey) {
    currentCategory = categoryKey;
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;

    document.getElementById("category-badge").textContent = categoryKey.toUpperCase();

    showScreen("quiz-screen");

    showQuestion();
}
// 2. Menampilkan Soal dan Pilihan Jawaban
function showQuestion() {
    selectedOptionIndex = null;
    isAnswerChecked = false;

    const questionsList = questionsDatabase[currentCategory];
    const currentQ = questionsList[currentQuestionIndex];

    const totalQ = questionsList.length;
    document.getElementById("question-number").textContent = `Question ${currentQuestionIndex + 1} / ${totalQ}`;
    const progressPercent = ((currentQuestionIndex + 1) / totalQ) * 100;
    document.getElementById("progress-bar-fill").style.width = `${progressPercent}%`;

    document.getElementById("question-text").textContent = currentQ.question;

    const codeBox = document.getElementById("code-box");
    if (currentQ.code) {
        codeBox.textContent = currentQ.code;
        codeBox.style.display = "block";
    } else {
        codeBox.style.display = "none";
    }

    const imageBox = document.getElementById("image-box");
    const imageEl = document.getElementById("question-image");
    if (currentQ.image) {
        imageEl.src = currentQ.image;
        imageEl.alt = currentQ.imageAlt || "Gambar soal";
        imageEl.onerror = () => { imageBox.style.display = "none"; };
        imageBox.style.display = "block";
    } else {
        imageBox.style.display = "none";
        imageEl.removeAttribute("src");
    }


    const optionsListContainer = document.getElementById("options-list");
    optionsListContainer.innerHTML = "";

    const prefixes = ["A", "B", "C", "D"];
    currentQ.options.forEach((optionText, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.onclick = () => selectOption(index);

        btn.innerHTML = `
            <span class="option-prefix">${prefixes[index]}.</span>
            <span>${escapeHTML(optionText)}</span>
        `;
        optionsListContainer.appendChild(btn);
    });

    const feedbackBox = document.getElementById("feedback-box");
    feedbackBox.className = "feedback-box";
    feedbackBox.style.display = "none";

    const actionBtn = document.getElementById("action-btn");
    actionBtn.textContent = "Periksa Jawaban";
    actionBtn.disabled = true;
}

// 3. Memilih Pilihan Jawaban
function selectOption(index) {
    if (isAnswerChecked) return;

    selectedOptionIndex = index;
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add("selected");
        } else {
            btn.classList.remove("selected");
        }
    });

    document.getElementById("action-btn").disabled = false;
}

// 4. Mengatur Fungsi Tombol Utama (Periksa / Soal Berikutnya)
function handleActionButton() {
    if (!isAnswerChecked) {
        checkAnswer();
    } else {
        nextQuestion();
    }
}

// 5. Memeriksa Jawaban Pemain
function checkAnswer() {
    isAnswerChecked = true;
    const currentQ = questionsDatabase[currentCategory][currentQuestionIndex];
    const buttons = document.querySelectorAll(".option-btn");
    const feedbackBox = document.getElementById("feedback-box");
    const feedbackTitle = document.getElementById("feedback-title");
    const feedbackText = document.getElementById("feedback-text");

    buttons.forEach(btn => btn.style.pointerEvents = "none");

    if (selectedOptionIndex === currentQ.answer) {
        score += 10;
        correctCount++;

        buttons[selectedOptionIndex].classList.remove("selected");
        buttons[selectedOptionIndex].classList.add("correct-style");

        feedbackBox.className = "feedback-box correct";
        feedbackTitle.textContent = "✓ Correct! (+10 Points)";
        feedbackText.innerHTML = `<strong>Penjelasan:</strong> ${currentQ.explanation}`;
    } else {
        wrongCount++;

        if (selectedOptionIndex !== null) {
            buttons[selectedOptionIndex].classList.remove("selected");
            buttons[selectedOptionIndex].classList.add("wrong-style");
        }

        buttons[currentQ.answer].classList.add("correct-style");

        feedbackBox.className = "feedback-box wrong";
        feedbackTitle.textContent = "✗ Wrong!";
        feedbackText.innerHTML = `
            <strong>Jawaban yang benar:</strong> ${escapeHTML(currentQ.options[currentQ.answer])}<br>
            <strong>Penjelasan:</strong> ${currentQ.explanation}
        `;
    }

    feedbackBox.style.display = "block";

    const actionBtn = document.getElementById("action-btn");
    const totalQ = questionsDatabase[currentCategory].length;

    if (currentQuestionIndex < totalQ - 1) {
        actionBtn.textContent = "Soal Selanjutnya ➔";
    } else {
        actionBtn.textContent = "Lihat Hasil Akhir 🏆";
    }
    actionBtn.disabled = false;
}

// 6. Lanjut ke Soal Berikutnya atau Selesai
function nextQuestion() {
    const totalQ = questionsDatabase[currentCategory].length;

    if (currentQuestionIndex < totalQ - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        finishGame();
    }
}

// 7. Menampilkan Layar Hasil Akhir (Result Screen)
function finishGame() {
    const totalQ = questionsDatabase[currentCategory].length;
    const maxScore = totalQ * 10;

    document.getElementById("score-badge").textContent = `${score} / ${maxScore}`;
    document.getElementById("stat-correct").textContent = correctCount;
    document.getElementById("stat-wrong").textContent = wrongCount;

    showScreen("result-screen");
}

// 8. Restart / Kembali ke Beranda
function restartGame() {
    showScreen("home-screen");
}