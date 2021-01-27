// import functions and grab DOM elements
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        hp: 35,
        gold: 0,
        completed: {},
    };

    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);

    window.location = './map';
});
// initialize state

// set event listeners to update state and DOM