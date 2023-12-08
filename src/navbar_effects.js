document.addEventListener('DOMContentLoaded', (event) => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar'); //-logo

    console.log("Launch Navbar.js");
    const navbarHeight = navbar.offsetHeight; // Get the dynamic height of the navbar

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            navbar.style.top = `-${navbarHeight}px`; // Use navbarHeight here
        
            console.log(navbarHeight); 
        } else {
            // Scrolling up
            navbar.style.top = '0px';
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }, false);
}); 

document.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.querySelector('.navbar');
    //const navbar_logo = document.querySelector('.navbar-logo') // Remove "-logo" if height does not match
    const bodyBefore = document.createElement('div');
    bodyBefore.id = 'body-before';
    document.body.insertBefore(bodyBefore, document.body.firstChild);

    function adjustPseudoElementHeight() { 
        const navbarHeight = navbar.offsetHeight
        bodyBefore.style.height = navbarHeight + 'px';
    }

    window.addEventListener('resize', adjustPseudoElementHeight);
    adjustPseudoElementHeight(); // Initial adjustment
});