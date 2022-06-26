var btnSidebar = document.querySelector('.btn-dispatch-sidebar');
var sidebar = document.querySelector('.sidebar');
var content = document.querySelector('.content');

btnSidebar.addEventListener('click', (evt) => {
  evt.preventDefault();
  sidebar.classList.toggle('expanded');
  content.classList.toggle('sidebar-expanded');
});

window.addEventListener('click', (evt) => {
  if (evt.target === btnSidebar || evt.target.parentNode === btnSidebar) return;
  sidebar.classList.remove('expanded');
  content.classList.remove('sidebar-expanded');
});
