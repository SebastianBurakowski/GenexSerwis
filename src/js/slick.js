$(document).ready(function () {
    $('.opinions__box').slick({
        slidesToShow: 2,       // Wyświetlaj 2 slajdy naraz
        autoplaySpeed: 4000,
        slidesToScroll: 1,     // Przewijaj o 1 slajd
        arrows: false,          // Pokazuj strzałki
        dots: false,            // Dodaj nawigację w formie kropek
        autoplay: true,       // Opcjonalnie: automatyczne przesuwanie
        responsive: [          // Responsywne ustawienia
            
            {
                breakpoint: 992,  // Dla ekranów mniejszych niż 768px
                settings: {
                    slidesToShow: 1, // Wyświetlaj tylko 1 slajd
                }
            }
        ]
    });
});
