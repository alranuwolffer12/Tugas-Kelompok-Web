/* ==========================================================================
   LOGIKA GAME (STATE + FUNGSI UTAMA)
   ==========================================================================
   Bergantung pada:
   - questionsDatabase  (js/data.js)
   - showScreen, escapeHTML (js/utils.js)
*/

/* --------------------------------------------------------------------------
   STATE MANAGEMENT (VARIABEL GAME)
   -------------------------------------------------------------------------- */
let currentCategory = "";       // Kategori aktif (python/html/css/javascript)
let currentQuestionIndex = 0;   // Indeks soal saat ini
let score = 0;                  // Total skor pemain
let correctCount = 0;           // Jumlah jawaban benar
let wrongCount = 0;             // Jumlah jawaban salah
let selectedOptionIndex = null; // Indeks jawaban yang dipilih pemain
let isAnswerChecked = false;    // Status apakah soal sudah di-check

/* --------------------------------------------------------------------------
   GAME FUNCTIONS
   -------------------------------------------------------------------------- */

// 1. Memulai Game berdasarkan kategori yang dipilih
function selectCategory(categoryKey) {
    currentCategory = categoryKey;
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;

    // Update nama badge kategori
    document.getElementById("category-badge").textContent = categoryKey.toUpperCase();

    // Pindah dari Home Screen ke Quiz Screen
    showScreen("quiz-screen");

    // Tampilkan soal pertama
    showQuestion();
}

// 2. Menampilkan Soal dan Pilihan Jawaban
function showQuestion() {
    // Reset state untuk soal baru
    selectedOptionIndex = null;
    isAnswerChecked = false;

    const questionsList = questionsDatabase[currentCategory];
    const currentQ = questionsList[currentQuestionIndex];

    // Update Progress Bar & Nomor Soal
    const totalQ = questionsList.length;
    document.getElementById("question-number").textContent = `Question ${currentQuestionIndex + 1} / ${totalQ}`;
    const progressPercent = ((currentQuestionIndex + 1) / totalQ) * 100;
    document.getElementById("progress-bar-fill").style.width = `${progressPercent}%`;

    // Tampilkan Teks Pertanyaan
    document.getElementById("question-text").textContent = currentQ.question;

    // Tampilkan Kode jika ada, atau sembunyikan jika null
    const codeBox = document.getElementById("code-box");
    if (currentQ.code) {
        codeBox.textContent = currentQ.code;
        codeBox.style.display = "block";
    } else {
        codeBox.style.display = "none";
    }

    // Render Pilihan Jawaban (Options)
    const optionsListContainer = document.getElementById("options-list");
    optionsListContainer.innerHTML = ""; // Bersihkan pilihan sebelumnya

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

    // Sembunyikan Feedback Box
    const feedbackBox = document.getElementById("feedback-box");
    feedbackBox.className = "feedback-box";
    feedbackBox.style.display = "none";

    // Reset Tombol Aksi (Check Answer / Next)
    const actionBtn = document.getElementById("action-btn");
    actionBtn.textContent = "Periksa Jawaban";
    actionBtn.disabled = true; // Disable sampai pemain memilih jawaban
}

// 3. Memilih Pilihan Jawaban
function selectOption(index) {
    if (isAnswerChecked) return; // Jika sudah dicek, abaikan klik

    selectedOptionIndex = index;
    const buttons = document.querySelectorAll(".option-btn");

    // Hilangkan class 'selected' dari semua tombol, lalu tambahkan ke yang dipilih
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add("selected");
        } else {
            btn.classList.remove("selected");
        }
    });

    // Aktifkan tombol 'Periksa Jawaban'
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

    // Nonaktifkan semua pilihan jawaban agar tidak bisa diganti
    buttons.forEach(btn => btn.style.pointerEvents = "none");

    // Cek apakah jawaban pemain benar
    if (selectedOptionIndex === currentQ.answer) {
        // Jawaban Benar
        score += 10;
        correctCount++;

        buttons[selectedOptionIndex].classList.remove("selected");
        buttons[selectedOptionIndex].classList.add("correct-style");

        feedbackBox.className = "feedback-box correct";
        feedbackTitle.textContent = "✓ Correct! (+10 Points)";
        feedbackText.innerHTML = `<strong>Penjelasan:</strong> ${currentQ.explanation}`;
    } else {
        // Jawaban Salah
        wrongCount++;

        if (selectedOptionIndex !== null) {
            buttons[selectedOptionIndex].classList.remove("selected");
            buttons[selectedOptionIndex].classList.add("wrong-style");
        }

        // Beri warna hijau pada jawaban yang seharusnya benar
        buttons[currentQ.answer].classList.add("correct-style");

        feedbackBox.className = "feedback-box wrong";
        feedbackTitle.textContent = "✗ Wrong!";
        feedbackText.innerHTML = `
            <strong>Jawaban yang benar:</strong> ${escapeHTML(currentQ.options[currentQ.answer])}<br>
            <strong>Penjelasan:</strong> ${currentQ.explanation}
        `;
    }

    // Tampilkan Feedback Box
    feedbackBox.style.display = "block";

    // Ubah tombol menjadi 'Next Question'
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

/* ==========================================================================
   PANDUAN PENGEMBANGAN MASA DEPAN (FOR JUNIOR DEVELOPERS / V2 & V3)
   ==========================================================================
   1. ACAK SOAL (Randomize Questions) [V2]:
      Gunakan algoritma Fisher-Yates Shuffle pada array soal saat selectCategory():
      function shuffle(array) {
          return array.sort(() => Math.random() - 0.5);
      }

   2. TAMBAH TIMER / WAKTU [V2]:
      Gunakan setInterval() di showQuestion() untuk menghitung mundur 15 detik per soal.
      let timeLeft = 15;
      let timer = setInterval(() => {
          timeLeft--;
          if (timeLeft <= 0) { clearInterval(timer); checkAnswer(); }
      }, 1000);

   3. SIMPAN SKOR KE LOCALSTORAGE [V4]:
      Gunakan window.localStorage untuk menyimpan High Score:
      localStorage.setItem('highScore_python', score);
*/
