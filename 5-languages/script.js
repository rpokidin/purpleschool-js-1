document.addEventListener("DOMContentLoaded", () => {

    var lang = prompt('Какой ваш разговорный язык?', '');

    switch (lang) {
        case 'en':
          console.log('Hello!');
          break;
        case 'ru':
            console.log('Привет!');
          break;
        case 'de':
            console.log('Guten Tag!');
          break;
        default:
            console.log('Мы не определили ваш язык!');
      }

})