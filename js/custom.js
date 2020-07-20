const firstNames = ["Hindu", "Muslim", "Christian", "Buddhist"];

const secondNames = ["Female", "Male", "Non-binary", "Female"];

const secondAbility = ["Touch", "Sight", "Hearing", "Speech"];

const secondSexuality = ["Heterosexual", "Bisexual", "Queer"];

const secondAge = [ "16- 24", "25-65", "65+"];

const skintone = ["#f9cfae", "#dea674", "#804e31", "b87139"];


const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `someone of ${firstNames[getRandomNumber(firstNames.length)]} faith,
   is of a  ${secondNames[getRandomNumber(secondNames.length)]} gender, 
   may have a lost of ${secondAbility[getRandomNumber(secondAbility.length)]}, 
   is from a ${secondSexuality[getRandomNumber(secondSexuality.length)]} 
   group and of a ${secondAge[getRandomNumber(secondAge.length)]} generation
   of a ${skintone[getRandomNumber(skintone.length)]} skintone`;

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

setRandomName();

