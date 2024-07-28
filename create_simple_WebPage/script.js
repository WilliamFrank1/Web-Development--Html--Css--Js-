function change_text(){
    input = document.getElementById("input")
    paragraph = document.getElementById("text")
    paragraph.innerText = input.value
    alert("The text is dynamically updated by javascript")
}