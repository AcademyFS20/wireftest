var app = document.querySelector('.txt-animation');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('I am Samira, a web developer')
  .pauseFor(300)
  .deleteChars(13)
  .typeString('<strong> front-end</strong> developer ')
  .typeString('<strong> and an <span style="color: #57221F;"> artist </span> ! </strong>')
  .pauseFor(1000)
  .start();

  const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0]
  const navGauche = document.getElementsByClassName('nav-gauche')[0]
  
  console.log(hamburgerMenu);
 
  hamburgerMenu.addEventListener('click',() =>{
          
        navGauche.classList.toggle('visible');
  })
  
