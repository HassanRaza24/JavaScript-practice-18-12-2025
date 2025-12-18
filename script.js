let display = document.getElementById("screen");

let btns = document.querySelectorAll("button");

btns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        let value = btn.innerText
        if (value === "clear") {
            display.value = ""
        } else {
            display.value = display.value + value 
        }
    })
})
