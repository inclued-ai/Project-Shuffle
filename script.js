const firstNames = ["Hindu", "Muslim", "Christian", "Buddhist"];

const secondNames = ["Female", "Male", "Non-binary"];

const secondAbility = ["Touch", "Sight", "Hearing", "Speech"];

const secondSexuality = ["Heterosexual", "Bisexual", "Queer"];

const secondAge = ["Child", "Young-Adult", "Adult", "Older"];


const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `someone of ${firstNames[getRandomNumber(firstNames.length)]} faith, is of a  ${secondNames[getRandomNumber(secondNames.length)]} gender, may have a lost of ${secondAbility[getRandomNumber(secondAbility.length)]}, is from a ${secondSexuality[getRandomNumber(secondSexuality.length)]} group and of a ${secondAge[getRandomNumber(secondAge.length)]} generation?`;

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

setRandomName();

