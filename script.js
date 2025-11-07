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

const bottomMargin = () => {
    footerHeight = document.getElementsByTagName("footer")[0].clientHeight;
    if (document.getElementsByClassName("grid-container").length > 0) {
        document.getElementsByClassName("grid-container")[0].style.marginBottom = `${footerHeight + 15}px`
    }
    if (document.getElementsByClassName("flex").length > 0) {
        document.getElementsByClassName("flex")[0].style.marginBottom = `${footerHeight + 15}px`
    }
}

document.addEventListener("DOMContentLoaded", () => {
    bottomMargin()
});