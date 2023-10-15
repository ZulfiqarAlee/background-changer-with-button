let btn = document.querySelectorAll('.buttons');
let body = document.querySelector('body');
btn.forEach(function(button){
    button.addEventListener("click",function(e){
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "purple"){
            body.style.backgroundColor = e.target.id
        }
    })
})