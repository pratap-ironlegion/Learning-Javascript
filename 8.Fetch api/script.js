function createUserCard() {
    fetch("https://randomuser.me/api/?results=3")
    .then((rawdata) => rawdata.json())
    .then((data) => {
        document.querySelector(".cards").innerHTML = "";
        data.results.forEach((user) => {
            // Create main card container
            const card = document.createElement("div");
            card.className = "flex-1 flex flex-col justify-center bg-white rounded-lg shadow-lg p-6 w-80";

            // Create image
            const img = document.createElement("img");
            img.src = `${user.picture.large}`;
            img.alt = "User";
            img.className = "w-24 h-24 rounded-full mx-auto mb-4";

            // Create name
            const name = document.createElement("h2");
            name.className = "text-2xl font-bold text-center text-gray-800";
            name.textContent = `${user.name.first +" " + user.name.last}`;

            // Create age
            const age = document.createElement("p");
            age.className = "text-center text-gray-600 mb-2";
            age.textContent = `Age: ${user.dob.age}`;

            // Create gender
            const gender = document.createElement("p");
            gender.className = "text-center text-gray-600 mb-2";
            gender.textContent = `Gender: ${user.gender}`;

            // Create email
            const email = document.createElement("p");
            email.className = "text-center text-gray-600 mb-4";
            email.textContent = `Email: ${user.email}`;

            // Append elements to card
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(age);
            card.appendChild(gender);
            card.appendChild(email);

            // Append card to body (or any container)
            document.querySelector(".cards").appendChild(card);

        })
    }).catch((err) => {
        console.log("Error:", err);
    });
}

let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    createUserCard();
});



