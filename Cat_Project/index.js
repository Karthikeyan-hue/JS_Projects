function switchOff(){
    document.getElementById("bulb").src = "https://ik.imagekit.io/c3q3h7pex/JS-Practice/Cat%20Project/bulb-go-off-img.png?updatedAt=1721460058628";
    document.getElementById("cat").src = "https://ik.imagekit.io/c3q3h7pex/JS-Practice/Cat%20Project/cat-eyes-img.png?updatedAt=1721460059075";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("switchOff").style.backgroundColor = "#cbd2d9";
    document.getElementById("switchOn").style.backgroundColor = "#22c55e";


}

function switchOn(){
    document.getElementById("bulb").src = "https://ik.imagekit.io/c3q3h7pex/JS-Practice/Cat%20Project/bulb-go-on-img.png?updatedAt=1721460059307";
    document.getElementById("cat").src = "https://ik.imagekit.io/c3q3h7pex/JS-Practice/Cat%20Project/cat-img.png?updatedAt=1721460059294";
    document.getElementById("switchStatus").textContent = "Switched On";
    document.getElementById("switchOff").style.backgroundColor = "#e12d39";
    document.getElementById("switchOn").style.backgroundColor = "#cbd2d9";
}