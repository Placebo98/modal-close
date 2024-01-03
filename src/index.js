// открытие/закритие модального окна //

const openBtn = document.querySelector(".modal-open");
const closeBtn = document.querySelector(".modal-close");
const modal = document.querySelector("[data-modal]");

openBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
modal.addEventListener("click", toggleModalOnClickBackdrop);
document.addEventListener("keydown", toggleModalOnClickBackdrop);

//Функция простого закритие модалки
function toggleModal() {
  modal.classList.toggle("is-hidden");
}
// Функция закрытие модалки по клике на Backdrop или Esc
function toggleModalOnClickBackdrop(e) {
  if (e.target === modal || e.code === `Escape`) {
    toggleModal();
  }
}
