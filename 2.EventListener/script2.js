let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(dets) {
    if (dets.key === " ") {
        h1.textContent = "Space";
    }
    else if (dets.key === "Enter") {
        h1.textContent = "Enter";
    }
    else if (dets.key === "ArrowUp") {
        h1.textContent = "↑";
    }
    else if (dets.key === "ArrowDown") {
        h1.textContent = "↓";
    }
    else if (dets.key === "ArrowLeft") {
        h1.textContent = "←";
    }
    else if (dets.key === "ArrowRight") {
        h1.textContent = "→";
    }
    else {
        h1.textContent = dets.key;
    }
    
})