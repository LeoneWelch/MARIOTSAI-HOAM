window.addEventListener("mousemove", function (event) {
    var horizontal = event.clientX;
    var vertical = event.clientY;
    
    var elementUnderCursor = document.elementFromPoint(horizontal, vertical);

    // Vérifiez si l'élément sous le curseur est le bouton "Close"
    if (elementUnderCursor.tagName.toLowerCase() === 'a' && elementUnderCursor.innerText.toLowerCase() === 'close') {
        boute.style.display = 'none';
        return;
    } else {
        boute.style.display = 'block';
    }

    gsap.to(curseur, { left: horizontal, top: vertical, duration: 0 });

    var windowWidth = window.innerWidth;
    var threshold = windowWidth / 2;

    if (horizontal < threshold) {
        boute.innerHTML = "Back";
        curseur.style.marginLeft = "-40px";
    } else {
        boute.innerHTML = "Next";
        curseur.style.marginLeft = "20px";
    }
});
