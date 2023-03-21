const boxes = document.querySelectorAll(".box");

const remove=()=>{
    boxes.forEach((box)=>{
        box.classList.remove("active");
    })
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        remove();
        box.classList.add("active");
    })
})