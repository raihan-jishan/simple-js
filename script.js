//  require id my name
let div = document.getElementById("time");
let content = document.getElementById("content");
const handleClick = () => {
    return(
    div.innerHTML = new Date(),
    content.style.display = "none"
    )
};
