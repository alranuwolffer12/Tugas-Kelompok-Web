/* ==========================================================================
   DATABASE SOAL (QUESTIONS DATABASE)
   ==========================================================================
   Setiap kategori memiliki array berisi 10 object soal.
   Sangat mudah dikembangkan dengan menambahkan object baru.
   File ini harus dimuat PERTAMA (sebelum utils.js dan game.js).
*/
const questionsDatabase = {
    python: [
        {
            question: "Apa output dari kode Python berikut?",
            code: "x = 5\ny = 3\nprint(x + y)",
            options: ["2", "8", "15", "53"],
            answer: 1, // Indeks jawaban benar (0-based): B
            explanation: "Operator + menjumlahkan nilai integer x (5) dan y (3) sehingga hasilnya 8."
        },
        {
            question: "Apa hasil dari ekspresi berikut di Python?",
            code: "print(5 + 3 * 2)",
            options: ["16", "11", "13", "10"],
            answer: 1,
            explanation: "Sesuai urutan operasi matematika (PEMDAS/BODMAS), perkalian (3 * 2 = 6) dijalankan lebih dulu sebelum penjumlahan (5 + 6 = 11)."
        },
        {
            question: "Manakah tipe data dari nilai 3.14 di Python?",
            code: "x = 3.14\nprint(type(x))",
            options: ["int", "string", "float", "boolean"],
            answer: 2,
            explanation: "Angka desimal di Python dikategorikan sebagai tipe data float."
        },
        {
            question: "Apa output dari penggabungan string berikut?",
            code: "a = \"Code\"\nb = \"Quest\"\nprint(a + b)",
            options: ["Code Quest", "CodeQuest", "Code+Quest", "Error"],
            answer: 1,
            explanation: "Operator + pada tipe data string menggabungkan teks secara langsung tanpa menambahkan spasi otomatis."
        },
        {
            question: "Elemen apa yang dicetak dari list berikut?",
            code: "buah = [\"Apel\", \"Pisang\", \"Jeruk\"]\nprint(buah[1])",
            options: ["Apel", "Pisang", "Jeruk", "IndexError"],
            answer: 1,
            explanation: "Indexing list di Python dimulai dari angka 0. Indeks 0 = Apel, Indeks 1 = Pisang."
        },
        {
            question: "Apa output dari kondisi if-else berikut?",
            code: "x = 7\nif x > 10:\n    print(\"A\")\nelif x > 5:\n    print(\"B\")\nelse:\n    print(\"C\")",
            options: ["A", "B", "C", "Error"],
            answer: 1,
            explanation: "Kondisi pertama (x > 10) bernilai False. Kondisi elif (x > 5) bernilai True, maka mencetak 'B'."
        },
        {
            question: "Benar atau Salah: Indentasi (spasi/tab) di Python sangat penting untuk menentukan blok kode.",
            code: null,
            options: ["Benar", "Salah"],
            answer: 0,
            explanation: "Benar! Tidak seperti JavaScript atau C++ yang menggunakan kurung kurawal {}, Python menggunakan indentasi spasi/tab."
        },
        {
            question: "Berapa kali perulangan for ini akan berjalan?",
            code: "for i in range(3):\n    print(i)",
            options: ["2 kali", "3 kali", "4 kali", "1 kali"],
            answer: 1,
            explanation: "range(3) menghasilkan urutan angka 0, 1, dan 2. Jadi kode mencetak angka sebanyak 3 kali."
        },
        {
            question: "Apa fungsi dari keyword def di Python?",
            code: "def sapa():\n    print(\"Halo\")",
            options: ["Mendefinisikan variabel baru", "Mendefinisikan fungsi (function)", "Mengapus variabel", "Mengimpor library"],
            answer: 1,
            explanation: "Keyword 'def' digunakan untuk membuat atau mendefinisikan sebuah fungsi (function)."
        },
        {
            question: "Apa hasil logika dari ekspresi berikut?",
            code: "a = True\nb = False\nprint(a and b)",
            options: ["True", "False", "None", "Error"],
            answer: 1,
            explanation: "Operator 'and' hanya akan menghasilkan True jika KEDUA kondisi bernilai True. Karena b = False, hasilnya False."
        }
    ],

    html: [
        {
            question: "Tag HTML mana yang digunakan untuk membuat judul utama paling besar?",
            code: null,
            options: ["<heading>", "<h6>", "<h1>", "<head>"],
            answer: 2,
            explanation: "Tag <h1> digunakan untuk heading tingkat pertama (terbesar), sedangkan <h6> adalah paling kecil."
        },
        {
            question: "Tag mana yang digunakan untuk membuat tautan (hyperlink)?",
            code: null,
            options: ["<p>", "<img>", "<a>", "<link>"],
            answer: 2,
            explanation: "Tag <a> (anchor) digunakan untuk membuat tautan ke halaman lain menggunakan atribut href."
        },
        {
            question: "Atribut apa yang digunakan untuk menentukan sumber URL gambar pada tag <img>?",
            code: "<img ____=\"gambar.jpg\">",
            options: ["link", "src", "href", "url"],
            answer: 1,
            explanation: "Atribut 'src' (source) menentukan path/lokasi dari gambar yang akan ditampilkan."
        },
        {
            question: "Tag mana yang digunakan untuk membuat daftar poin tidak berurutan (bullet point)?",
            code: null,
            options: ["<ol>", "<ul>", "<li>", "<list>"],
            answer: 1,
            explanation: "<ul> (Unordered List) membuat daftar dengan bullet point. <ol> digunakan untuk daftar berurutan (angka)."
        },
        {
            question: "Benar atau Salah: Tag <br> digunakan untuk membuat baris baru (line break) dan tidak wajib memiliki tag penutup.",
            code: null,
            options: ["Benar", "Salah"],
            answer: 0,
            explanation: "Benar. Tag <br> adalah contoh self-closing tag atau empty element yang tidak memerlukan penutup </br>."
        },
        {
            question: "Tag mana yang digunakan untuk mendefinisikan baris dalam tabel HTML?",
            code: "<table>\n  <____>\n    <td>Data</td>\n  </____>\n</table>",
            options: ["<tb>", "<tr>", "<th>", "<table-row>"],
            answer: 1,
            explanation: "Tag <tr> (Table Row) digunakan untuk membungkus sel-sel data (<td>) dalam satu baris tabel."
        },
        {
            question: "Manakah tag semantic HTML5 yang cocok untuk bagian navigasi utama web?",
            code: null,
            options: ["<nav>", "<header>", "<section>", "<aside>"],
            answer: 0,
            explanation: "Tag <nav> secara spesifik ditujukan untuk menampung link navigasi utama aplikasi/website."
        },
        {
            question: "Atribut apa pada tag <a> yang digunakan agar tautan terbuka di tab baru?",
            code: "<a href=\"https://google.com\" ____=\"_blank\">Google</a>",
            options: ["target", "open", "newtab", "window"],
            answer: 0,
            explanation: "Atribut target=\"_blank\" memerintahkan peramban (browser) untuk membuka link di tab baru."
        },
        {
            question: "Tag elemen apa yang paling tepat digunakan untuk tombol interaktif?",
            code: null,
            options: ["<input type=\"text\">", "<button>", "<div>", "<click>"],
            answer: 1,
            explanation: "Tag <button> dicipitakan khusus untuk membuat elemen tombol yang dapat diklik."
        },
        {
            question: "Apa fungsi utama dari tag <head> dalam struktur dokumen HTML?",
            code: null,
            options: [
                "Menampilkan konten utama halaman",
                "Menampung metadata, judul tab, dan file CSS/JS",
                "Membuat bagian paling bawah (footer)",
                "Menampilkan navigasi web"
            ],
            answer: 1,
            explanation: "Elemen <head> berisi metadata (informasi tentang dokumen) yang umumnya tidak terlihat langsung di halaman web."
        }
    ],

    css: [
        {
            question: "Properti CSS mana yang digunakan untuk mengubah warna teks?",
            code: ".teks {\n    ____: red;\n}",
            options: ["font-color", "text-color", "color", "background-color"],
            answer: 2,
            explanation: "Properti 'color' digunakan khusus untuk mengatur warna dari teks."
        },
        {
            question: "Bagaimana cara memilih elemen dengan id=\"header\" menggunakan CSS Selector?",
            code: null,
            options: [".header", "#header", "*header", "header"],
            answer: 1,
            explanation: "Simbol pagar (#) digunakan untuk ID Selector, sedangkan titik (.) digunakan untuk Class Selector."
        },
        {
            question: "Apa perbedaan antara padding dan margin?",
            code: null,
            options: [
                "Padding di luar border, Margin di dalam border",
                "Padding di dalam border, Margin di luar border",
                "Keduanya memiliki fungsi yang sama",
                "Margin hanya untuk warna background"
            ],
            answer: 1,
            explanation: "Padding memberi ruang di DALAM elemen (antara konten & border), sedangkan Margin memberi ruang di LUAR elemen."
        },
        {
            question: "Properti CSS apa yang digunakan untuk membuat sudut elemen menjadi melengkung?",
            code: null,
            options: ["border-style", "corner-radius", "border-radius", "box-shadow"],
            answer: 2,
            explanation: "Properti 'border-radius' menentukan tingkat kelengkungan sudut border elemen."
        },
        {
            question: "Properti apa yang digunakan untuk mengaktifkan layout Flexbox pada suatu elemen?",
            code: ".container {\n    ____: flex;\n}",
            options: ["layout", "position", "display", "flex-mode"],
            answer: 2,
            explanation: "Setting 'display: flex;' mengubah sebuah container menjadi flexbox kontainer."
        },
        {
            question: "Dalam Flexbox, properti mana yang meratakan item secara vertikal di tengah (cross-axis)?",
            code: null,
            options: ["justify-content: center", "align-items: center", "text-align: center", "float: center"],
            answer: 1,
            explanation: "align-items: center mengatur perataan sumbu silang (vertikal), sedangkan justify-content mengatur sumbu utama (horisontal)."
        },
        {
            question: "Properti CSS mana yang digunakan untuk mengatur ukuran huruf (font)?",
            code: null,
            options: ["text-size", "font-style", "font-size", "text-height"],
            answer: 2,
            explanation: "Properti 'font-size' mengatur besar kecilnya ukuran teks (misal: 16px, 1.2rem)."
        },
        {
            question: "Benar atau Salah: Sintaks CSS 'margin: 10px 20px;' memberikan margin 10px untuk Atas-Bawah dan 20px untuk Kiri-Kanan.",
            code: null,
            options: ["Benar", "Salah"],
            answer: 0,
            explanation: "Benar. Nilai pertama mengatur (Top & Bottom), nilai kedua mengatur (Left & Right)."
        },
        {
            question: "Bagaimana cara menyembunyikan elemen agar tidak terlihat dan tidak memakan ruang di halaman?",
            code: null,
            options: ["display: none;", "visibility: hidden;", "opacity: 0;", "position: hide;"],
            answer: 0,
            explanation: "display: none; menyembunyikan elemen secara total sehingga tidak memakan ruang layout."
        },
        {
            question: "Properti mana yang digunakan untuk memberikan bayangan pada kotak/elemen?",
            code: null,
            options: ["text-shadow", "box-shadow", "element-shadow", "border-shadow"],
            answer: 1,
            explanation: "box-shadow digunakan untuk menambahkan efek bayangan di sekitar frame elemen."
        }
    ],

    javascript: [
        {
            question: "Apa output dari kode JavaScript sederhana berikut?",
            code: "let x = 10;\nx = x + 5;\nconsole.log(x);",
            options: ["5", "10", "15", "105"],
            answer: 2,
            explanation: "Nilai awal x adalah 10, kemudian ditambah 5 sehingga nilai akhir x menjadi 15."
        },
        {
            question: "Apa yang terjadi jika kita mencoba mengubah nilai variabel const?",
            code: "const pi = 3.14;\npi = 3.15;",
            options: ["Nilai pi berubah jadi 3.15", "TypeError / Error", "Nilai pi jadi 0", "Tidak terjadi apa-apa"],
            answer: 1,
            explanation: "Variabel yang dideklarasikan dengan 'const' bersifat konstan dan nilainya tidak dapat diubah (reassign)."
        },
        {
            question: "Apa hasil dari penggabungan string dan number berikut?",
            code: "let hasil = \"5\" + 3;\nconsole.log(hasil);",
            options: ["8", "\"53\"", "NaN", "Error"],
            answer: 1,
            explanation: "Karena salah satu operan adalah string (\"5\"), JS melakukan koersi tipe dan menggabungkan angka 3 menjadi string \"53\"."
        },
        {
            question: "Fungsi DOM apa yang digunakan untuk memilih satu elemen HTML berdasarkan ID-nya?",
            code: null,
            options: [
                "document.getElementByClass()",
                "document.getElementById()",
                "document.querySelectorId()",
                "document.getId()"
            ],
            answer: 1,
            explanation: "document.getElementById('nama-id') adalah method bawaan JS untuk mengambil elemen unik berdasarkan attribute id."
        },
        {
            question: "Apa tipe data hasil dari operator typeof berikut?",
            code: "console.log(typeof \"Halo World\");",
            options: ["\"text\"", "\"string\"", "\"char\"", "\"object\""],
            answer: 1,
            explanation: "Teks yang diapit tanda petik dikategorikan sebagai tipe data 'string' di JavaScript."
        },
        {
            question: "Method Array mana yang digunakan untuk menambahkan elemen baru ke bagian akhir array?",
            code: "let angka = [1, 2];\nangka.____(3);",
            options: ["push()", "pop()", "shift()", "add()"],
            answer: 0,
            explanation: "push() menambahkan item di akhir array, sedangkan pop() menghapus item terakhir."
        },
        {
            question: "Apa output dari perbandingan nilai dan tipe data berikut?",
            code: "console.log(5 === \"5\");",
            options: ["true", "false", "undefined", "null"],
            answer: 1,
            explanation: "Operator === (strict equality) mengecek Nilai DAN Tipe Data. Karena 5 (number) != \"5\" (string), hasilnya false."
        },
        {
            question: "Bagaimana cara menulis komentar 1 baris di JavaScript?",
            code: null,
            options: ["<!-- Komentar -->", "// Komentar", "/* Komentar */", "# Komentar"],
            answer: 1,
            explanation: "// digunakan untuk komentar satu baris di JavaScript."
        },
        {
            question: "Apa hasil dari ekspresi Boolean berikut?",
            code: "console.log(Boolean(0));",
            options: ["true", "false", "null", "undefined"],
            answer: 1,
            explanation: "Angka 0 di JavaScript dikategorikan sebagai nilai 'falsy', sehingga Boolean(0) menghasilkan false."
        },
        {
            question: "Benar atau Salah: JavaScript dan Java adalah bahasa pemrograman yang sama.",
            code: null,
            options: ["Benar", "Salah"],
            answer: 1,
            explanation: "Salah! Java dan JavaScript adalah dua bahasa yang sama sekali berbeda dengan konsep dan kegunaan yang berbeda."
        }
    ]
};
