 // mobile menu display  //
  let isMenuOpen = false;
  const munuButton = document.getElementById('hamburger');

  munuButton?.addEventListener('click', () => {
    const menu = document.getElementById('mobileMenu');
    /* const desktopMenu = document.getElementById('desktopMenu'); */
    if (isMenuOpen) { 
      /* menu?.classList.remove('open'); */
      menu?.classList.add('mobileMenuHidden');
      isMenuOpen = false
      /* desktopMenu?.classList.remove('open'); */
    } else {/* mobileMenuHidden    mobileMenuDisplayed */
      menu?.classList.remove('mobileMenuHidden');
      isMenuOpen = true
      /* menu?.classList.add('mobileMenuDisplayed'); */
      /* desktopMenu?.classList.add('open'); */
    }
  })

  const nav = document.querySelector('#navBar') as HTMLElement;
  let navTop = nav.offsetTop;
  let isFixed = false;

  function fixedNav() {
    if (window.scrollY >= navTop) {    
      nav.classList.add('fixed');
      /* if (!isFixed) {
        console.log("entro en isFIXED")
        for (let el of elementos) {
          el.classList.remove("linkFontSizeBig");
          el.classList.add("linkFontSizeSmall");
        }
      } */
      isFixed = true
    } else {
      nav.classList.remove('fixed');    
      /* if (isFixed) {
        console.log("entro en isFIXED")
        for (let el of elementos) {

          el.classList.remove("linkFontSizeSmall");
          el.classList.add("linkFontSizeBig");
        }
      }
      isFixed = false */
    }
  }

  window.addEventListener('scroll', fixedNav);

// change color link on scroll acordin to section  //
  const links = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('[data-name="navLinkField"]');

const observerGeneral = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          link.classList.toggle(
            'active-link',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, 
  { threshold: 0.55 }
);

const observerEspecifico = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          link.classList.toggle(
            'active-link',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, 
  { threshold: 0.2 }
);

sections.forEach(section => {
  if (section.id === 'OurServices') {
    observerEspecifico.observe(section);
  } else {
    observerGeneral.observe(section);
  }
});


// Archivo theme-toggle.js
/* const themeSwitch = document.getElementById('theme-toggle'); *//* theme-toggle-label */
const themeSwitch = document.getElementById('theme-toggle-label');
const userTheme = localStorage.getItem('theme');
/* const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches; */
//console.log("systemTheme: ", systemTheme)

// Inicializa el tema al cargar
const setTheme = (theme: string) => {
  document.documentElement.className = theme; // Añade la clase al html
  localStorage.setItem('theme', theme); 
};

if (userTheme) {
  setTheme(userTheme);
  console.log("setea theme con user theme")
}
// Lógica para cargar el tema preferido
/* if (userTheme) {
  setTheme(userTheme);
  console.log("setea theme con user theme")
} else {
  setTheme(systemTheme ? 'dark' : 'light');
  console.log("setea theme con system theme")
} */

// Agrega el evento al botón del switch
themeSwitch?.addEventListener('click', (e) => {
  /* e.stopPropagation() */
  const currentTheme = document.documentElement.className;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  console.log("click para setear theme")
});

function init() {
    console.log("recarga scripts   ejecuta Init")
  }

/*   document.addEventListener('DOMContentLoaded', init); */
  /* document.addEventListener('routeChange', init);
  
  window.dispatchEvent(new Event('load'));
  eval('init()'); */
