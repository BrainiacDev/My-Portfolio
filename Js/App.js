
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
            console.log(button.dataset);
        })
    });



    // Light and Dark mode

    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
        themeBtn.querySelector("i").classList.toggle("fa-sun");
        themeBtn.querySelector("i").classList.toggle("fa-moon");
        document.body.classList.toggle("light-mode");

    })

    window.addEventListener("load", () => {
        if (document.body.classList.contains("light-mode")) {
            themeBtn.querySelector("i").classList.add("fa-moon");
        } else {
            themeBtn.querySelector("i").classList.add("fa-sun");
        }
    })
})();

// Theme Color
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        } else {
            style.setAttribute("disabled", "true")
        }
    })
}


// Style Switcher

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})


// Hide Style switcher on scroll

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})


// Cursor Effect

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(control => {

    control.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    control.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});