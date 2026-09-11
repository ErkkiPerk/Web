let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let result = document.getElementById("result")

function createMail() {
    result.innerHTML = input1.value + "." + input2.value + "@gmail.com"
}

function slumpaFarg() {
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const farg = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = farg;
}

window.onload = slumpaFarg;