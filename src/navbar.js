// fetch navbar from html and replace it with the navbar from the template
// const navbar = document.querySelector('.navbar');
// navbar.innerHTML = `
//     <div class="container">
//         <div class="navbar__logo">
//             <a href="index.html">
//                 <img src="img/logo.png" alt="logo">
//             </a>
//         </div>
//         <div class="navbar__menu">
//             <nav class="navbar">
//                 <ul>
//                     <li><a href="index.html">Home</a></li>
//                     <li><a href="AboutMe.html">About Me</a></li>
//                     <li><a href="Projects.html">Projects</a></li>
//                     <li><a href="Travels.html">Travels</a></li>
//                     <li><a href="#">Design concepts</a></li>
//                     <li><a href="#">Contact</a></li>
//                 </ul>
//             </nav>
//         </div>
//     </div>
// `;

fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });

document.addEventListener('DOMContentLoaded', (event) => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    console.log("Launch Navbar.js");
    const navbarHeight = navbar.offsetHeight; // Get the dynamic height of the navbar

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            navbar.style.top = `-${navbarHeight}px`; // Use navbarHeight here
        } else {
            // Scrolling up
            navbar.style.top = '0px';
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }, false);
}); 

document.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.querySelector('.navbar');
    const bodyBefore = document.createElement('div');
    bodyBefore.id = 'body-before';
    document.body.insertBefore(bodyBefore, document.body.firstChild);

    function adjustPseudoElementHeight() {
        const navbarHeight = navbar.offsetHeight;
        bodyBefore.style.height = navbarHeight + 'px';
    }

    window.addEventListener('resize', adjustPseudoElementHeight);
    adjustPseudoElementHeight(); // Initial adjustment
});



// // Path: src\footer.js
// // fetch footer from html and replace it with the footer from the template
// const footer = document.querySelector('.footer');
// footer.innerHTML = `
//     <div class="container">
//         <div class="footer__logo">
//             <a href="index.html">
//                 <img src="img/logo.png" alt="logo">
//             </a>
//         </div>
//         <div class="footer__menu">
//             <ul>
//                 <li><a href="index.html">Home</a></li> 
//                 <li><a href="Contact.html">Contact</a></li>
//             </ul>
//         </div>
//     </div>
// `;