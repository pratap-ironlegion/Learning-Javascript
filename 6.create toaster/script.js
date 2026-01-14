function createToaster(config) {
    const parent = document.querySelector(".parent");

    return function (message) {
        const div = document.createElement("div");
        div.textContent = message;

        div.className = `inline-block ${
            config.theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
        } px-6 py-3 rounded shadow-lg pointer-events-none`;

        parent.appendChild(div);

        // Apply position only if not default
        if (config.positionX !== "left" || config.positionY !== "top") {
            parent.classList.add("fixed");

            parent.classList.add(
                config.positionY === "bottom" ? "bottom-5" : "top-5",
                config.positionX === "right" ? "right-5" : "left-5"
            );
        }

        setTimeout(() => {
            parent.removeChild(div);
        }, config.duration * 1000);
    };
}


let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    duration: 3,
    theme: "dark",
});

toaster("Hello, this is your first toast message!");
setTimeout(()=> {
toaster("This is another toast message.");
}, 2000);
