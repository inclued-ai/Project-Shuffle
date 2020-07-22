var results = [];

var counter = 0;
const maxCycles = 3;

const categoryA = 18;
const categoryB = 17;

const getRandomIndex = (max) => Math.floor(Math.random() * max) + 1;

function getRandomFace() {
    if (counter != 1) {
      return `img/category-a/image-${getRandomIndex(categoryA)}.jpg`;
    } else {
      return `img/category-b/image-${getRandomIndex(categoryB)}.jpg`;
    }
}

function logResult(e) {
    results.push(document.getElementById('face').src);
    results.push(e.srcElement.value);
    results.push(getDateTimeForStorage());
    counter += 1;
    if (counter >= maxCycles) {
        recordResult(results);
        window.location.href = "page2.html";
    }
}

const setRandomFace = () => {
  document.getElementById('face').setAttribute("src", getRandomFace());
}

document.getElementById('yes')
  .addEventListener('click', logResult);

document.getElementById('yes')
  .addEventListener('click', setRandomFace);

document.getElementById('no')
  .addEventListener('click', logResult);

document.getElementById('no')
  .addEventListener('click', setRandomFace);

setRandomFace();

results.push(getDateTimeForStorage());