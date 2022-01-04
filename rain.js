function createHEart () {
    const heart = document.createElement("div")
    heart.classList.add("heart")

    heart.innerText = "Happy birthday❤";
    heart.style.left = Math.random() * 100 + "vw"
    heart.style.animation = Math.random() * 2 + 1 + "sec"
    document.body.appendChild(heart)
}

setInterval(createHEart,100);
