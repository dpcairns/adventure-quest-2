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
// - Use the quest to populate the elements of the html

h1.textContent = quest.title;
p.textContent = quest.description;
img.src = `../assets/${quest.image}`;

for (let choice of quest.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;
    
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);

    form.append(label);    
}

const button = document.createElement('button');

button.textContent = 'Submit';

form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    // - On submit,
    //     - Calculate the user's new stats (HP and gold)
    const selectionId = formData.get('choices');
    // go get the data about this choice
    const choice = findById(quest.choices, selectionId);
    const user = JSON.parse(localStorage.getItem('USER'));

    console.log('=============================\n');
    console.log('|| choice', choice);
    console.log('\n=============================');
    user.hp += choice.hp;
    user.gold += choice.gold;

    //     - Put the new stats in local storage
    localStorage.setItem('USER', JSON.stringify(user));
    //     - Send user back to map
    window.location = '../map';
});

