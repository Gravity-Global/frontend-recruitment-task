# Zadanie rekrutacyjne GravityGlobal na frontend developera.

Projekt został **sforkowany** do mojego prywatnego gita jako nowe repozytorium dostępne publicznie.

W zadaniu korzystano z narzędzia Gulp.

Funkcjonalności są napisane w czystym JavaScript, ze standardami ES6.

### Wykonane zadania wg specyfikacji
1. Zmieniono tytuł strony.
2. Stworzono sekcję strony wg poniższych zasad:
    - sekcję na desktop wykonano wedle designu [design](https://www.figma.com/file/dqY9uYrUYPyr5yjeECoy6X/Recruitment-Task)
    - sekcja spełnia aspekty WCAG
    - sekcja jest responsywna
    - sekcja jest w kontenerze o max. szerokości 1440px
    - sekcja jest dostosowana do wielokrotnego użycia na stronie
3. Dodano funkcjonalności w JavaScript:
    - po kliknięciu w przycisk 'Button' otwiera się pop-up
    - każde kliknięcie przycisku 'Button' jest zliczane
    - kliknięcie poza oknem pop-up'a automatycznie go zamyka
    - w pop-up'ie wyświetlamy ile razy użytkownik kliknął w przycisk 'Button'
    - ilość kliknięć w przycisk 'Button' jest stale zapisywana pod użytkownika w localStorage (po odświeżeniu strony lub zamknięciu przeglądarki i ponownym uruchomieniu wartość nie jest zerowana)
    - jeżeli ilość kliknięć jest większa niż 5, w pop-up'ie pokazuje się przycisk 'Reset & close', który resetuje licznik i zamyka pop-up
