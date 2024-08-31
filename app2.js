let themeBtn = document.querySelector("#theme")
themeBtn.addEventListener("click", () => {
    let section = document.querySelector("section")
    let form = document.querySelector("form")
    let inputs = document.querySelectorAll("input")
    let buttons = document.querySelectorAll("button")
    if (themeBtn.innerText === "Light") {
        section.style.backgroundColor = "white"
        form.style.border = "2px solid black"
        form.style.backgroundColor = " white"
        form.style.boxShadow = "0px 0px 20px  black"
        inputs[0].style.boxShadow = "0px 0px 20px  black"
        inputs[1].style.boxShadow = "0px 0px 20px  black"
        buttons[0].style.backgroundColor = " white"
        buttons[0].style.boxShadow = "0px 0px 20px  black"
        buttons[0].style.border = "2px solid black"
        buttons[0].style.color = "black"
        buttons[1].style.backgroundColor = " white"
        buttons[1].style.border = "2px solid black"
        buttons[1].style.boxShadow = "0px 0px 20px  black"
        buttons[1].style.color = "black"
        inputs.forEach((input) => {
            input.style.backgroundColor = "white"
            input.style.border = " 2px solid black"
            input.style.color = "black"
        })
        themeBtn.innerText = "Dark"
    } else {
        section.style.backgroundColor = "black"
        form.style.border = "2px solid white"
        form.style.backgroundColor = " black"
        form.style.boxShadow = "0px 0px 20px  white"
        inputs[0].style.boxShadow = "0px 0px 20px  white"
        inputs[1].style.boxShadow = "0px 0px 20px  white"
        buttons[0].style.backgroundColor = "black"
        buttons[0].style.boxShadow = "0px 0px 20px  black"
        buttons[0].style.border = "2px solid white"
        buttons[0].style.color = "white"
        buttons[1].style.backgroundColor = " black"
        buttons[1].style.boxShadow = "0px 0px 20px  white"
        buttons[1].style.border = "2px solid white"
        buttons[1].style.color = "white"
        inputs.forEach((input) => {
            input.style.backgroundColor = "black"
            input.style.border = " 2px solid white "
            input.style.color = "white"
        })
        themeBtn.innerText = "Light"
    }
})

function formHandle() {
    event.preventDefault()
    let inputs = document.querySelectorAll("input");
    let para=document.querySelectorAll("p");
    if (inputs[0].value=="" || inputs[1].value=="") {
    
        inputs[0].style.border = "2px solid red"
        para[0].innerText="This field is empty"
        para[0].style.color="red"

        inputs[1].style.border = "2px solid red"
         para[1].innerText="This field is empty"
         para[1].style.color="red"
    }
    else {
        inputs[0].style.border = "2px solid green"
        para[0].innerText=""
       
        
        inputs[1].style.border = "2px solid green"
        para[1].innerText=""
    
    }
}
