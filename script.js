function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    // Section 1 (Title and Subtitle)
    var app = document.querySelector(".title");
    var app1 = document.querySelector(".section__text_p1");
    var text = app.textContent;
    var text1 = app1.textContent;
  
    var typewriter1 = new Typewriter(app, {
      loop: true, // Set to true if you want the typing effect to loop
      delay: 75, // Adjust typing speed
    });
  
    typewriter1
      .typeString(text1)
      .pauseFor(2000)
      .deleteAll()
      .typeString(text)
      .pauseFor(2000)
      .start();
  
    // // Section 2 (About Section - Part 1)
    // var app2 = document.querySelector(".about-text-p1");
    // var text2 = app2.textContent;
  
    // var typewriter2 = new Typewriter(app2, {
    //   loop: true, // Set to true if you want the typing effect to loop
    //   delay: 75, // Adjust typing speed
    // });
  
    // typewriter2.typeString(text2).pauseFor(2000).deleteAll().start();
  
    // // Section 2 (About Section - Part 2)
    // var app3 = document.querySelector(".about-title");
    // var text3 = app3.textContent;
  
    // var typewriter3 = new Typewriter(app3, {
    //   loop: true, // Set to true if you want the typing effect to loop
    //   delay: 75, // Adjust typing speed
    // });
  
    // typewriter3.typeString(text3).pauseFor(2000).start();
  });


// var app = document.querySelector('.title')
// var customNodeCreator = function(character) {
//     return document.createTextNode(character);
//   }

//   var typewriter = new Typewriter(app, {
//     loop: true,
//     delay: 75,
//     onCreateTextNode: customNodeCreator,
//   });

//   typewriter
//     .typeString('A simple yet powerful native javascript')
//     .pauseFor(300)
//     .start();
