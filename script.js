const reservarBtn = document.getElementById("reservar")
const fondoModal = document.querySelector(".modal-background")
const closeBtn = document.querySelector(".close")
const agendarBtn = document.getElementById("agendar")


reservarBtn.addEventListener("click",()=>{
    fondoModal.style.display = "block"
})

closeBtn.addEventListener("click",()=>{
    fondoModal.style.display = "none"
})

fondoModal.addEventListener("click",(e)=>{
   if(e.target.className === "modal-background"){
        fondoModal.style.display = "none"
   }
})

agendarBtn.addEventListener("click",()=>{
    fondoModal.style.display = "none"
    alert("¡El turno ha quedado reservardo!")
})