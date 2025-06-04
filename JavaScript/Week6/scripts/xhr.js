window.addEventListener("DOMContentLoaded", function () {
  // when user clicks on Load Data button, the data.txt should be displayed in "output" area asynchrnously.
  let btn1 = this.document.querySelector("#btn1");
  btn1.addEventListener("click", loadData);

  let btn2 = this.document.querySelector("#btn2");
  btn2.addEventListener("click", loadJSON);

  let btn3 = this.document.querySelector("#btn3");
  btn3.addEventListener("click", loadJSONS);

  let btn4 = this.document.querySelector("#btn4");

  btn4.addEventListener("click", loadAPI);

  function loadData() {
    // 1. Create an XHR Object...
    const xhr = new XMLHttpRequest();

    // 2. Configure the request
    xhr.open("GET", "../data/data.txt");

    // 3.Action to take when request is completed...

    xhr.onload = function () {
      if (this.status === 200) {
        document.querySelector(
          "#output"
        ).innerHTML = `THE DATA RECEIVED FROM THE FILE IS: <p style="color:white;background-color:green"><strong>${this.responseText}</strong></p>`;
      } else {
        document.querySelector("#output").innerText =
          "Cannot read file - or something bad has happened";
      }
    };

    // 4. Execute the request...

    xhr.send(); //I will forget this 1000 times..
  }

  function loadJSON() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "../data/user.json");

    xhr.onload = function () {
      if (this.status === 200) {
        let user = JSON.parse(this.responseText);
        document.querySelector(
          "#output"
        ).innerHTML = `ID: <em>${user.id}</em><br/>
        NAME:<strong> ${user.name}</strong><br/>
        EMAIL: ${user.email}<br/>
        AGE: ${user.age}<br/>
        `;
      } else {
        document.querySelector("#output").innerText = "Something gone wrong";
      }
    };

    xhr.send();
  }

  function loadJSONS() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "../data/users.json");

    xhr.onload = function () {
      if (this.status === 200) {
        let users = JSON.parse(this.responseText);
        users.forEach(function (user) {
          document.querySelector(
            "#output"
          ).innerHTML += `<div class="profile"><p>ID:${user.id}</p><p>NAME:${user.name}</p><p>EMAIL:${user.email}</p><p>AGE:${user.age}</p></div>`;
        });
      }
    };

    xhr.send();
  }

  function loadAPI() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/user");

    xhr.onload = function () {
      if (this.status === 200) {
        let users = JSON.parse(this.responseText);
        console.log(users);
      }
    };

    xhr.send();
  }
});
