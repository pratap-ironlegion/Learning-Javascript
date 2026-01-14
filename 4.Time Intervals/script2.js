let progressbar = document.querySelector("#progressBar");
let percenttext = document.querySelector("#percentText");
let startBtn = document.querySelector("#startBtn");
let h2 = document.querySelector("h2");

startBtn.addEventListener("click", function(dets) {
    h2.textContent = "Downloading...";
    let count = 0;
    const interval = setInterval(function() {

        if (count <= 99) {
            count++;
            progressbar.style.width = `${count}%`;
            percenttext.textContent = `${count}%`;
        }
        else {
            h2.innerHTML = "<b>Download Completed.</b>";
            clearInterval(interval);
        }
    }, 10000/ 100);

});


