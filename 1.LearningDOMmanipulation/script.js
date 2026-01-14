// let h1 = document.getElementById("heading");
// h1.classList.add("para-class");
// console.dir(h1);



// let h1 = document.querySelector("#heading");
// console.dir(h1);

// h1.textContent = "Hello! I'm changed using DOM manipulation.";
// h1.innerHTML = "<i>Hello! I'm changed using DOM manipulation.</i>";

// let a = document.querySelector("a");
// console.dir(a);

// a.setAttribute("href", "https://www.google.com");

// console.log(a.getAttribute("href"));

// let p = document.createElement("p");
// p.textContent = "This is a paragraph created using DOM manipulation.";
// p.style.color = "yellow";
// // document.querySelector("div").append(p);
// document.querySelector("div").prepend(p);




let listItems = document.querySelectorAll("li");

let length = listItems.length;

for (let i = 0; i < length; i++) {
    console.log(listItems[i].textContent);
}

// let listItems = document.querySelectorAll("li");
// listItems.forEach((values)=> {
//     console.log(values.textContent);
// })

