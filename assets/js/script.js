const height = nav.offsetHeight;
window.addEventListener('scroll', (e) => {
    let pos = window.pageYOffset;
    if (pos - height > 100) {
        navTel.classList.add('active')
    } else {
        console.log('disables')
        navTel.classList.remove('active')
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const animateElements1 = document.querySelectorAll('.animate-on-scroll_left');
    const animateElements2 = document.querySelectorAll('.animate-on-scroll_right');
    const animateElements3 = document.querySelectorAll('.animate-on-scroll_up');



    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animateElements1.forEach(element => {
        observer.observe(element);
    });
    animateElements2.forEach(element => {
        observer.observe(element);
    });
    animateElements3.forEach(element => {
        observer.observe(element);
    });
});

document.getElementById('burger').addEventListener('click', ()=> {
    menu.classList.add('active')
    document.body.classList.add('no-scroll')
})

document.getElementById('escape').addEventListener('click', () => {
    menu.classList.remove('active')
    document.body.classList.remove('no-scroll')
})

document.getElementById('menu').addEventListener('click', (e) => {
    if (e.target.id === 'menu') {
        menu.classList.remove('active')
        document.body.classList.remove('no-scroll')
    }
})

