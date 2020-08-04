// Using Google Analytics to track interactions
// NB: The first 20 event hits sent to Analytics are processed immediately, 
// thereafter processing is rate-limited to two event hits per second. 
// A maximum of 500 hits per session are processed. This limit applies to all hits except ecommerce item or transaction hits.
// So wise to keep (maxImageCycles + maxPersonaCycles) x 3 below 20

// Common functions
var previousTime = Date.now();
function getElaspedTime() {
  var currentTime = Date.now();
  var elaspedTime = Date.now() - previousTime;
  previousTime = currentTime;
  return elaspedTime;
}

// Image Shuffle functionality
var imageCounter = 0;
const maxImageCycles = 3;
const categoryA = 18;
const categoryB = 18;

const getRandomImageNumber = (max) => Math.floor(Math.random() * max) + 1;

function getRandomFace() {
  if (imageCounter != 1) {
    return `img/category-a/img-A${getRandomImageNumber(categoryA)}.jpg`;
  } else {
    return `img/category-b/img-B${getRandomImageNumber(categoryB)}.jpg`;
  }
}

function logImageShuffleResult(e) {
  var response_time = getElaspedTime();
  var image_src = document.getElementById('face').src;
  var response = e.srcElement.value + "_response";
  data = {'event_category': 'Photos',
          'event_label': image_src,
          'value': 1}
  // data[response] = 1;
  gtag('event', response, data);

  response = e.srcElement.value + "_response_time";
  data = {'event_category': 'Photos',
          'event_label': image_src,
          'value': response_time}
  // data[response] = response_time
  gtag('event', response, data);

  imageCounter += 1;
  if (imageCounter >= maxImageCycles) {
      hideImageShuffle();
      showPersonaShuffle();
  }
}

const setRandomFace = () => {
  var random_face = getRandomFace();
  document.getElementById('face').setAttribute('src', random_face);
  gtag('event', 'view', {
    'event_category': 'Photos',
    'event_label': document.getElementById('face').src,
    'view': 1,
    'non_interaction': true
  });
}

function showImageShuffle(){
  // Set up event handlers for Yes & No buttons
  document.getElementById('yes').addEventListener('click', logImageShuffleResult);
  document.getElementById('yes').addEventListener('click', setRandomFace);
  document.getElementById('no').addEventListener('click', logImageShuffleResult);
  document.getElementById('no').addEventListener('click', setRandomFace);

  setRandomFace();
}

function hideImageShuffle(){

  // Hide image
  document.getElementById('face').style.display = 'none';
  
  // Remove other event handlers
  document.getElementById('yes').removeEventListener('click', logImageShuffleResult);
  document.getElementById('yes').removeEventListener('click', setRandomFace);
  document.getElementById('no').removeEventListener('click', logImageShuffleResult);
  document.getElementById('no').removeEventListener('click', setRandomFace);
}

showImageShuffle();

// Persona Shuffle functionality

var personaCounter = 0;
const maxPersonaCycles = 3;
const religions = ["Hindu", "Muslim", "Christian", "Buddhist", "Sikh", "Jewish"];
const genders = ["Female", "Male", "Non-binary"];
const abilities = ["Touch", "Sight", "Hearing", "Speech"];
const sexualities = ["Heterosexual", "Bisexual", "Queer"];
const ages = [ "between 16-24", "between 25-44", "between 45-64", "65+"];
const skintone = ["#f9cfae", "#dea674", "#804e31", "#b87139"];

const getRandomIndex = (max) => Math.floor(Math.random() * max);

function getRandomPersona() {
  var selectedSkinTone = skintone[getRandomIndex(skintone.length)];
  return `Someone of the ${religions[getRandomIndex(religions.length)]} faith, <br />
    is ${genders[getRandomIndex(genders.length)]}, <br />
    may have a loss of ${abilities[getRandomIndex(abilities.length)]}, <br />
    is ${sexualities[getRandomIndex(sexualities.length)]} <br />
    and is ${ages[getRandomIndex(ages.length)]} years old <br />
    with this <div style="display:inline;background:${selectedSkinTone};color: ${selectedSkinTone};">${selectedSkinTone}</div> skintone.`;
}

function getRandomPersonaText() {
  return document.getElementById('random-name').innerText.replace(/(?:\r\n|\r|\n)/g, " ");
}

function logPersonaShuffleResult(e) {
  var response_time = getElaspedTime();
  var persona_text = getRandomPersonaText();
  var response = e.srcElement.value + "_response";
  data = {'event_category': 'Personas',
          'event_label': persona_text,
          'value': 1};
  // data[response] = 1;
  gtag('event', response, data);

  response = e.srcElement.value + "_response_time";
  data = {'event_category': 'Personas',
          'event_label': persona_text,
          'value': response_time};
  // data[response] = response_time;
  gtag('event', response, data);

  personaCounter += 1;
  if (personaCounter >= maxImageCycles) {
      hidePersonaShuffle();
      showThankYou();
  }
}

const setRandomPersona = () => {
  document.getElementById('random-name').innerHTML = getRandomPersona();
  gtag('event', 'view', {
    'event_category': 'Personas',
    'event_label': getRandomPersonaText(),
    'view': 1,
    'non_interaction': true
  });
}

function showPersonaShuffle(){
  // Update heading
  document.getElementsByTagName('title')[0].innerText = 'Have you considered your ideal customer could be?';
  document.getElementById('heading').innerText = 'Have you considered your ideal customer could be?';
  // Show persona text holder
  document.getElementById('random-name').style.display = 'block';

  // Add new event handlers to Yes and No buttons
  document.getElementById('yes').addEventListener('click', logPersonaShuffleResult);
  document.getElementById('yes').addEventListener('click', setRandomPersona);
  document.getElementById('no').addEventListener('click', logPersonaShuffleResult);
  document.getElementById('no').addEventListener('click', setRandomPersona);

  // Show a random persona description
  setRandomPersona();
}

function hidePersonaShuffle(){
  document.getElementById('buttons').style.display = "none";
  document.getElementById('random-name').style.display = "none";
}

// Final page functioanlity

function showThankYou(){
  document.getElementsByTagName('title')[0].innerText = 'Thank you';
  document.getElementById('heading').innerText = 'Thank you';
}
