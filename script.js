const expand = (id) => {
    paragraph = document.querySelector(id);
    button = paragraph.nextSibling.nextSibling;
    if (paragraph.classList.length === 0) {
        paragraph.classList.add("compact");
        button.innerHTML = "Show More";
    }
    else if (paragraph.classList.length === 1) {
        paragraph.classList.remove("compact");
        button.innerHTML = "Show Less";
    }
}