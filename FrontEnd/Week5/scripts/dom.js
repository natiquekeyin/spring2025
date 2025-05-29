window.addEventListener("DOMContentLoaded", function () {
  let body = this.document.body;

  body.addEventListener("click", function () {
    console.log("body clicked");
  });

  let cat = document.querySelector("#cat");
  cat.addEventListener("click", function (evt) {
    console.log("Cat clicked!!");
    evt.stopPropagation();
  });
});
