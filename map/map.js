import questData from '../data.js';
const ul = document.querySelector('ul');

const user = JSON.parse(localStorage.getItem('USER'));

// - Before anything, if all quests are completed, redirect to results page
let completedAllQuests = true;

for (let quest of questData) {
    // if this quest is NOT in the completed object
    if (!user.completed[quest.id]) {
        completedAllQuests = false;
    }
}

// - If the user has <= 0 HP, redirect them to the results page
if (user.hp <= 0 || completedAllQuests) {
    window.location = '../results';
}
// - Otherwise, grab quest data
// - Loop through it
for (let quest of questData) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    // - Generate a title for each quest
    a.textContent = quest.title;
    a.href = `../quest/?id=${quest.id}`;
    // - If the quest has been completed, cross it out
    // - If the quest has NOT been completed it should be a link to the correct quest
    li.append(a);
    ul.append(li);
}
