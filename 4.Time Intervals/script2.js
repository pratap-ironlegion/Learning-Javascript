let progressbar = document.querySelector("#progressBar");
let percenttext = document.querySelector("#percentText");
let startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", function(dets) {
    let count = 0;
    const interval = setInterval(function() {
        console.log(count);
     

        if (count <= 99) {
            count++;
            progressbar.style.width = `${count}%`;
            percenttext.textContent = `${count}%`;
        }
        else {
            clearInterval(interval);
        }
    }, 10000/ 100);

});


