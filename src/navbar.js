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
document.addEventListener('DOMContentLoaded', (event) => {
    fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });
})
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