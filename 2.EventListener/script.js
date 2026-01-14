////doubleclick event listener

// let h1 = document.querySelector("h1");

// function doubleClick() {
//     h1.style.color = "red";
// }

// h1.addEventListener("dblclick", doubleClick);
// h1.removeEventListener("dblclick", doubleClick);





//// input event listener
// let inp = document.querySelector("input");

// inp.addEventListener("input", function(data) {
//     console.log(data.target.value);
// })

// inp.addEventListener("input", function(dets) {
//     console.log(dets.data);
// })

// inp.addEventListener("input", function(dets) {
//     if (dets.data !== null) {
//         console.log(dets.data);
//     }
// })





//// change event listener
let sel = document.querySelector("select");
let heading = document.querySelector("#heading");

sel.addEventListener("change", function(dets) {
    console.log(dets.target.value);
    heading.textContent = `${dets.target.value} device selected`;

})