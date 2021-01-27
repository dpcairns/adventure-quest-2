import { findById } from '../utils.js';
import quests from '../data.js';
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('section img');
const form = document.querySelector('form');

// - Grab the id of the quest from the URL
const params = new URLSearchParams(window.location.search);
// get the value of the id key in the URL quesry string
const questId = params.get('id');

// - Use that id to `findById` that quest in our quest data
const quest = findById(quests, questId);

console.log('=============================\n');
console.log('|| quest', quest);
console.log('\n=============================');
// - Use the quest to populate the elements of the html
// - On submit,
//     - Calculate the user's new stats (HP and gold)
//     - Put the new stats in local storage
//     - Send user back to map
