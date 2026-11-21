
const jobWrappers = document.querySelectorAll(".job-wrapper");

jobWrappers.forEach(function (wrapper) {
  const hideButton = wrapper.querySelector(".hideButton");
  const showButton = wrapper.querySelector(".showButton");
  const jobCard = wrapper.querySelector(".job-card");

  hideButton.addEventListener("click", function () {
    jobCard.hidden = true;
    showButton.hidden = false;
  });

  showButton.addEventListener("click", function () {
    jobCard.hidden = false;
    showButton.hidden = true;
  });
});
