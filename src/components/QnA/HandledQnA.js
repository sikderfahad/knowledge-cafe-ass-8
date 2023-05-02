const hidQnA = () => {
  document.querySelector(".faq-list").classList.add("hidden");
  document.getElementById("btnLock").classList.add("hidden");
  document.getElementById("btnLockOpen").classList.remove("hidden");
};

const showQnA = () => {
  document.querySelector(".faq-list").classList.remove("hidden");
  document.getElementById("btnLock").classList.remove("hidden");
  document.getElementById("btnLockOpen").classList.add("hidden");
};

export { hidQnA, showQnA };
