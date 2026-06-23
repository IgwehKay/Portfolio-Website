

// let isDarkmode  = false;

// function toggleMode(){
//     if (isDarkmode === false) {
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = 'white';
//     }
//     else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }

//     isDarkmode = !isDarkmode;
// }

function toggleMode(){
    document.body.classList.toggle("dark-mode")
}

document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    this.reset();
});

function toggleMenu(){
    document.getElementById("nav-menu").classList.toggle("show");
}