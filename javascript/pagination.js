document.addEventListener("DOMContentLoaded", function () {
    const showMoreButton = document.querySelector('.show-more');
    const allCards = document.querySelectorAll('.show:not(.mobile)');
    const initiallyVisibleCards = document.querySelectorAll('.show.mobile');

    const cardsPerPage = 6;
    let currentPage = 0;

    function showNextPage() {
        const startIndex = currentPage * cardsPerPage;
        const endIndex = (currentPage + 1) * cardsPerPage;

        for (let i = startIndex; i < endIndex; i++) {
            if (allCards[i]) {
                allCards[i].style.display = 'block';
            }
        }

        currentPage++;

        if (endIndex >= allCards.length) {
            showMoreButton.style.display = 'none';
        }
    }

    showMoreButton.addEventListener('click', function () {
    
        if (window.innerWidth <= 769) {
            showNextPage();
        }
    });

    initiallyVisibleCards.forEach(card => {
        card.style.display = 'block';
    });

    if (window.innerWidth <= 768) {
        for (let i = cardsPerPage; i < allCards.length; i++) {
            allCards[i].style.display = 'none';
        }
    }
});

window.addEventListener('resize', function () {

    if (window.innerWidth <= 768) {
        const allCards = document.querySelectorAll('.show:not(.mobile)');
        for (let i = 0; i < allCards.length; i++) {
            allCards[i].style.display = i < cardsPerPage ? 'block' : 'none';
        }
    }
});