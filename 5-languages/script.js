document.addEventListener("DOMContentLoaded", () => {

    const lang = prompt('Какой ваш разговорный язык?', '');

    switch (lang.toLowerCase()) {
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