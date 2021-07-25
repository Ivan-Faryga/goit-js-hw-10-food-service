import template from './templates/template.hbs';
import menuData from './menu.json';

console.log(template);

//================== main references ====================
const refs = {
  menu: document.querySelector('.js-menu'),
  input: document.getElementById('theme-switch-toggle'),
  body: document.body,
};

//================== объект с темами ====================
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//================== рендер разметки по шаблону====================
refs.menu.innerHTML = template(menuData);

//================== слушатель событьй на чекбоксе ====================
refs.input.addEventListener('change', onThemeSwitch);

//================== колбек с переключением тем====================
function onThemeSwitch(e) {
  if (e.target.checked) {
    toggleTheme(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', add);
    return;
  }
  toggleTheme(Theme.LIGHT, Theme.DARK);
}

function toggleTheme(add, remove) {
  refs.body.classList.add(add);
  refs.body.classList.remove(remove);
  localStorage.setItem('theme', add);
}

// проверка при загрузке страницы на наличие параметра (выбраннная тема) в localStorage
// refs.body.classList.add(
//   localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT,
// );
// refs.input.checked = true;
// refs.input.checked = localStorage.getItem('theme') === Theme.DARK;

(function () {
   if (localStorage.getItem('theme') === Theme.DARK) {
     if (localStorage.getItem('theme')) {
       refs.body.classList.add(Theme.DARK);
       refs.body.classList.add(
         localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT,
       );
       refs.input.checked = true;
       refs.input.checked = localStorage.getItem('theme') === Theme.DARK;
       return;
     };
     efs.body.classList.add(Theme.LIGHT)
})();
