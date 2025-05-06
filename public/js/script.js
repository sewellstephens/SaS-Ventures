function toggleMenu() {
    const menu = document.querySelector('.nav-menu-mobile-links');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

function toggleFaqAnswer(question) {
    const answer = question.nextElementSibling;
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}


