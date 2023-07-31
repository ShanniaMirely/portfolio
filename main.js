let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(200)
  .typeString('Desarrollo sitios web y publicidad en redes sociales.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
