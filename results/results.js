import scoreHp from './score-hp.js';
import scoreGold from './score-gold.js';
import { aliveGoldMessages, deadGoldMessages } from './messages.js';

// go grab the user from local storage
const user = JSON.parse(localStorage.getItem('USER'));

// we grab the dom element we want to inject stuff into
const storyDisplay = document.getElementById('story-display');

// we call scoreHp with the user's hp to get a string ('weak', for example)
const hpResult = scoreHp(user.hp);
// we call scoreHp with the user's hp to get a string ('wealthy', for example)
const goldResult = scoreGold(user.gold);
// go into the messages object and grab the corresponding string for weak, frail, or healthy
// hpResult is 'dead', 'frail', 'healthy'

// normally we would import this, but here it is for eacy readin'
const hpMessages = {
    dead: 'you are dead',
    frail: 'you retire in frail health',
    healthy: 'you retire and live a long life in good health',
};

const hpMessage = hpMessages[hpResult];

let goldMessages = null;

// depending on whether the user is dead, go grab some different gold messages
if (hpResult === 'dead') {
    goldMessages = deadGoldMessages;
}
else {
    goldMessages = aliveGoldMessages;
}

// grab the gold message from the object
const goldMessage = goldMessages[goldResult];

const story = `After your adventures, 
    ${user.name} the ${user.character}, 
    ${hpMessage} and ${goldMessage}.`;

storyDisplay.textContent = story;