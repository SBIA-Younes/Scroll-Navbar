// Créer un événément au scroll
let lastScroll =70;
window.addEventListener('scroll', (e)=> {
  if (lastScroll > window.scrollY) {
    // console.log(`show the navbar ${window.scrollY}\nlastScroll = ${lastScroll}`);
    navbar.style.top = 0;
  } else {
    console.log(`hide the navbar\nscrollBefore = ${window.scrollY}`);
    navbar.style.top ='-60px';
  }
  lastScroll = window.scrollY;
})
// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
