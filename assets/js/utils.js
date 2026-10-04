/* ==========================================================================
   HELPER FUNCTIONS (FUNGSI BANTUAN)
   ==========================================================================
   Fungsi umum yang tidak bergantung pada state game.
   Dimuat setelah data.js dan sebelum game.js.
*/

// Helper untuk berganti layar (Screen Navigator)
function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
}

// Helper untuk menghindari celah XSS saat menampilkan karakter HTML (<, >)
function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
