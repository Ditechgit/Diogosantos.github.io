function showSidebar(){
    const sidebar = document.querySelector(".vertical-menu")
    sidebar.style.display = "flex"
}
function hideSidebar(){
    const sidebar = document.querySelector(".vertical-menu")
    sidebar.style.display = "none"
}

/* Parte do Modal - Dialog */

const button = document.querySelector(".modal-btn");
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector("dialog span")

button.onclick = function(){
    modal.showModal()
}
buttonClose.onclick = function() {
    modal.close()
}



