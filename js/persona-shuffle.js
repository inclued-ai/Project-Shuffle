var counter = 0;
const maxCycles = 3;

const religions = ["Hindu", "Muslim", "Christian", "Buddhist", "Sikh", "Jewish"];

const genders = ["Female", "Male", "Non-binary"];

const abilities = ["Touch", "Sight", "Hearing", "Speech"];

const sexualities = ["Heterosexual", "Bisexual", "Queer"];

const ages = [ "between 16-24", "between 25-44", "between 45-64", "65+"];

const skintone = ["#f9cfae", "#dea674", "#804e31", "#b87139"];


const getRandomIndex = (max) => Math.floor(Math.random() * max);

function getRandomPersona() {
    var selectedSkinTone = skintone[getRandomIndex(skintone.length)];
    return `someone of the ${religions[getRandomIndex(religions.length)]} faith, <br />
   is ${genders[getRandomIndex(genders.length)]}, <br />
   may have a loss of ${abilities[getRandomIndex(abilities.length)]}, <br />
   is ${sexualities[getRandomIndex(sexualities.length)]} <br />
   and is ${ages[getRandomIndex(ages.length)]} years old <br />
   with this <div style="display:inline;background:${selectedSkinTone};color: ${selectedSkinTone};">${selectedSkinTone}</div> skintone.`;
}

function recordResult(e) {
    // TODO #5: Record results
    console.log(document.getElementById('random-name').innerText);
    console.log(e.srcElement.value);
    counter += 1;
    if (counter >= maxCycles) {
        window.location.href = "thank-you.html";
    }
}

const setRandomPersona = () => {
  document.getElementById('random-name').innerHTML = getRandomPersona();
}


document.getElementById('yes')
  .addEventListener('click', recordResult);

document.getElementById('yes')
  .addEventListener('click', setRandomPersona);


document.getElementById('no')
  .addEventListener('click', recordResult);

document.getElementById('no')
  .addEventListener('click', setRandomPersona);


setRandomPersona();
