let screen = document.getElementById("display");

let btn = document.querySelectorAll(".buttons button");
// console.log(btn)

btn.forEach(buton  =>{
    buton.addEventListener("click", ()=>{
        let value = buton.innerText
        if (value === "c") {
            screen.value = ""
        } else if (value === "=") {
            screen.value = eval(screen.value)
        }else{
            screen.value =screen.value + value;
        };
    });
});