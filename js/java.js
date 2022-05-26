const navSlide = () => {

    const bugger = document.querySelector('.bugger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');

    bugger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');
        //animation link
        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = ''

            } else {

                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        })

        //bugger amination

        bugger.classList.toggle('toggle');
    });


}

navSlide();