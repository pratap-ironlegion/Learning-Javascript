let form = document.querySelector("form");
let inputs = form.querySelectorAll("input");
let mainDiv = document.querySelector("#main");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

   let card = document.createElement("div");
   card.classList.add("card");

   let profile = document.createElement("div");
   profile.classList.add("profile");

   let img = document.createElement("img");
   img.setAttribute("src", inputs[0].value);

   let h3 = document.createElement("h3");
   let h5 = document.createElement("h5");
   let p = document.createElement("p");

   h3.textContent = inputs[1].value;
   h5.textContent = inputs[2].value;
   p.textContent = inputs[3].value;


    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    mainDiv.appendChild(card);

    inputs.forEach(function(input) {
        if (input.type !== "submit") {
            input.value = "";
        }
        
    });
 
})