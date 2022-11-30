const introParagraph = document.getElementById("intro-paragraph");

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

  let rate = 0.5;

  setInterval(() => {
    rate += 0.013;
    span.style.transform = `rotate(${
      (index + 1) * 9.5 + rate * 10
    }deg) translate(-10%, -10%)`;
  }, 1);

  rate += 0.013;
  span.style.transform = `rotate(${
    (index + 1) * 9.5 + rate * 10
  }deg) translate(-10%, -10%)`;

  introParagraph.appendChild(span);

  return span;
});

console.log(wrapped);
