let isEasterEggUnlocked = false;

function unlockEasterEgg() {
    if (isEasterEggUnlocked) return;
    isEasterEggUnlocked = true;

    const secretCard = document.getElementById('secret-category');
    if (secretCard) {
        secretCard.style.display = 'flex';
    }
}