const bttCardInlineText = [...document.getElementsByClassName("btt-card-inline-text")];
let bttCardShowNumber = 1;

setInterval(() => {
    bttCardInlineText.forEach((it) => {
        it.style.display = "none";
    });

    bttCardInlineText[bttCardShowNumber].style.display = "block";
    bttCardShowNumber++;

    if (bttCardShowNumber >= bttCardInlineText.length) {
        bttCardShowNumber = 0;
    }
}, 5000);
