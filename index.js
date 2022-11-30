const introParagraph = document.getElementById("intro-paragraph");

function animateIntroParagraph(introParagraph) {
  const introTexts = introParagraph.textContent.trim();

  const splited = introTexts.split("").filter((text, index, texts) => {
    const next = texts[index + 1];

    const regex = /^\s*$/;

    if (regex.test(text) && regex.test(next)) {
      return false;
    }

    return true;
  });

  const wrapped = splited.map((text, index) => {
    const span = document.createElement("span");
    span.classList.add("circling");
    span.innerHTML = text;

    let ROTATE_DEG = 0;
    let DIAMETER = 10;
    const LETTER_SPACING = 10.5;
    const AMOUNT_OF_CHANGE = 0.13;

    span.style.transform = `rotate(${
      (index + 1) * LETTER_SPACING + ROTATE_DEG
    }deg) translate(-10%, -${DIAMETER}%)`;

    setInterval(() => {
      ROTATE_DEG += AMOUNT_OF_CHANGE;
      DIAMETER += AMOUNT_OF_CHANGE;
      span.style.transform = `rotate(${
        (index + 1) * LETTER_SPACING + ROTATE_DEG
      }deg) translate(-10%, -${DIAMETER}%)`;
    }, 1);

    introParagraph.appendChild(span);

    return span;
  });
}

function fadeInIntroParagraph(introParagraph) {
  const span = introParagraph.querySelector("span");

  span.style.opacity = 1;
  span.style.pointerEvents = "initial";
}

animateIntroParagraph(introParagraph);

setTimeout(() => {
  fadeInIntroParagraph(introParagraph);
}, 3000);
