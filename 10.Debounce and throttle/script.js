// // Debounce

// function debounce(fnc, delay) {
//     let timer;

//     return function(...args) {
//         clearTimeout(timer);
//         timer = setTimeout(function() {
//             fnc(...args);
//         }, delay);
//     }
// }

// let input = document.querySelector("input");
// input.addEventListener("input", debounce(function() {
//     console.log("hey");
// }, 2000));



// // Throttle

function throttle(fnc, delay) {
    let timer = 0;
    return function(...args) {
        let now = Date.now();
        if (now - timer >= delay) {
            timer = now;
            fnc(...args);
        }
    }
}
let input = document.querySelector("input");
input.addEventListener("input", throttle(function() {
    console.log("hey");
}, 1000));