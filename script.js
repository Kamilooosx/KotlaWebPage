const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

//menuBar:



// landingpage

let LandingTitle = document.getElementById("homeTitle");
let LandingNav = document.getElementById("homeNav")
let LandingTitle2 = document.getElementById("homeTitle2");

window.addEventListener('scroll', function () {
        var value = window.scrollY;
        if (value < 1000) {
            LandingTitle.style.bottom = value * 0.5 + 'px';
            LandingNav.style.top = value * 0.5 + 'px';
            LandingTitle2.style.bottom = value * 0.5 +'px';
        }
    }
)







// text animation
/*
const text = document.querySelector(".homeTitle");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}
 */
