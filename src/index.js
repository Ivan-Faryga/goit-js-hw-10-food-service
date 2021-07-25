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
  if (!e.target.checked) {
    toggleTheme(Theme.LIGHT, Theme.DARK);
    return;
  }
  toggleTheme(Theme.DARK, Theme.LIGHT);
}


function toggleTheme(add, remove) {
  refs.body.classList.add(add);
  refs.body.classList.remove(remove);
  localStorage.setItem('theme', add);
}

// проверка при загрузке страницы localStorage на наличие параметра (выбраннная тема)
// Дословно - пропиши BODY следующий класс: если есть запись в LS - присвой из LS : если нет - примени "светлую тему"
refs.body.classList.add(
  localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT,
);
// если флажек (чекбокс) имеет свойство checked => примени "темную тему"
refs.input.checked = localStorage.getItem('theme') === Theme.DARK;




// =============== самовызывающаяся функция, которая проверяет наличие данных в localStorage
// (function () {
//     // запрашиваем, есть ли запись "цвет темы", которая равна "ночному варианту"
//     if (localStorage.getItem('theme')) {
//         // при положительном ответе - применить ночную тему
//         refs.body.classlist.add(localStorage.getItem('theme'));
//         // выставить флажок в положение "носная тема применена" - ПО УМОЛЧАНИЮ
//         refs.input.checked = localStorage.getItem('theme') === Theme.DARK;
//         return;
//     };
//     // в проитвном случае - применить светлую тему, а флажок не трогать. (checked = false)
//     refs.body.classList.add(Theme.LIGHT)
// })();

// refs.body.classList.add(
// //   localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT,
// // );
// // refs.input.checked = true;
// // refs.input.checked = localStorage.getItem('theme') === Theme.DARK;