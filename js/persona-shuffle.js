// Common functions
function getDateTimeForStorage() {
  return new Date().toUTCString().slice(0, -4);
}

// Image Shuffle functionality
var imageCounter = 0;
const maxImageCycles = 3;
const categoryA = 18;
const categoryB = 17;

const getRandomImageNumber = (max) => Math.floor(Math.random() * max) + 1;

function getRandomFace() {
  if (imageCounter != 1) {
    return `img/category-a/image-${getRandomImageNumber(categoryA)}.jpg`;
  } else {
    return `img/category-b/image-${getRandomImageNumber(categoryB)}.jpg`;
  }
}

function logImageShuffleResult(e) {
  // gtag('event', 'login', {'method': 'Google'});
  console.log(document.getElementById('face').src);
  console.log(e.srcElement.value);
  console.log(getDateTimeForStorage());
  imageCounter += 1;
  if (imageCounter >= maxImageCycles) {
      hideImageShuffle();
      showPersonaShuffle();
  }
}

const setRandomFace = () => {
  document.getElementById('face').setAttribute('src', getRandomFace());
}

function showImageShuffle(){
  // Set up event handlers for Yes & No buttons
  document.getElementById('yes').addEventListener('click', logImageShuffleResult);
  document.getElementById('yes').addEventListener('click', setRandomFace);
  document.getElementById('no').addEventListener('click', logImageShuffleResult);
  document.getElementById('no').addEventListener('click', setRandomFace);

  setRandomFace();

  console.log(getDateTimeForStorage());
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

function logPersonaShuffleResult(e) {
  // gtag('event', 'login', {'method': 'Google'});
  // Consider label view_item
  // gtag('event', 'persona-shuffle', {
  //   'event_category': 'engagement',
  //   'event_label': <label>,
  //   'value': <value>
  // });
  // Feature detects Navigation Timing API support.  
  // TODO Confirm fit for purpose as seems to be averaged
  // if (window.performance) {
  //   // Gets the number of milliseconds since page load
  //   // (and rounds the result since the value must be an integer).
  //   var timeSincePageLoad = Math.round(performance.now());

  //   // Sends the timing event to Google Analytics.
  //   gtag('event', 'timing_complete', {
  //     'name': 'load',
  //     'value': timeSincePageLoad,
  //     'event_category': 'JS Dependencies'
  //   });
  // }
  // https://developers.google.com/analytics/devguides/collection/gtagjs/user-timings
  console.log(document.getElementById('random-name').innerText.replace(/(?:\r\n|\r|\n)/g, " "));
  console.log(e.srcElement.value);
  console.log(getDateTimeForStorage());
  personaCounter += 1;
  if (personaCounter >= maxImageCycles) {
      hidePersonaShuffle();
      showThankYou();
  }
}

const setRandomPersona = () => {
  document.getElementById('random-name').innerHTML = getRandomPersona();
  // TODO: Record when shuffle changed loaded and shuffle is visible. - maybe an onload event on image if exists
  // TODO: Record random text
  // gtag('event', 'persona-shuffle', {
  //   'event_category': 'engagement',
  //   'event_label': 'view_item',
  //   'value': <value>
  // });
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

  // TODO: Record when page loaded and shuffle is visible.
  // gtag('event', 'video_auto_play_start', {
  //   'event_label': 'My promotional video',
  //   'event_category': 'video_auto_play',
  //   'non_interaction': true
  // });
  // gtag('event', 'timing_complete', {<timing_parameters>});
  // ref: https://developers.google.com/analytics/devguides/collection/gtagjs/user-timings
  console.log(getDateTimeForStorage());

  // TODO Up to - https://developers.google.com/analytics/devguides/collection/gtagjs/custom-dims-mets
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
