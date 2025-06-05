// Let's convert the library.js code which functional programming into Object Oriented Programming! Using the concepts of classes and objects and doing some reall OOP...

window.addEventListener("DOMContentLoaded", function () {
  // In ES5 ES6(modern JS), we use classes(in contrast with "constructor method" which is a legacy way of acheiving OOP in JS..), which are sort of blueprints and we create "objects" to utilize classes' functionalities...

  //   classes can have member variables, member functions etc...class is a combination of "CODE" & "DATA" .. CODE is the functions, DATA are the variables or fields..

  //   one of the very important/special function in class is "constructor" function ...it is used to construct/ create/ instantiate an "OBJECT"

  //   Other than JS, every language has the constructor method's name SAME AS THE CLASS NAME..
  class Book {
    constructor(t, a, i) {
      this.title = t;
      this.author = a;
      this.isbn = i;
    }

    addBookToList() {}
    clearFields() {}
    showAlert() {}
    deleteBook() {}
  }
  //   We will start from this point onward next week :)..
});
