

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
