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


document.querySelector('.header_btn').addEventListener('click', ()=> {
    modal.classList.add('active')
    document.body.classList.add('no-scroll')
    window.scrollTo(0, 0)
})

document.getElementById('close').addEventListener('click', () => {
    modal.classList.remove('active')
    document.body.classList.remove('no-scroll')
})


document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        modal.classList.remove('active')
        document.body.classList.remove('no-scroll')
    }
})

document.querySelector('.option-1').addEventListener('click', ()=> {
    modal.classList.add('active')
    document.body.classList.add('no-scroll')
    window.scrollTo(0, 0)
})

document.querySelector('.option-2').addEventListener('click', ()=> {
    modal.classList.add('active')
    document.body.classList.add('no-scroll')
    window.scrollTo(0, 0)
})

document.querySelector('.option-3').addEventListener('click', ()=> {
    modal.classList.add('active')
    document.body.classList.add('no-scroll')
    window.scrollTo(0, 0)
})

document.querySelector('.info_btn').addEventListener('click', ()=> {
    modal.classList.add('active')
    document.body.classList.add('no-scroll')
    window.scrollTo(0, 0)
})

function sendEmail() {
    Email.send({
        Host: "smtp.yourprovider.com", // Например, smtp.gmail.com
        Username: "ваш@email.com",
        Password: "ваш_пароль",
        To: 'получатель@email.com',
        From: "ваш@email.com",
        Subject: "Новая заявка",
        Body: `Имя: ${document.getElementById('phone').value}<br>`
    }).then(message => alert(message));
}
