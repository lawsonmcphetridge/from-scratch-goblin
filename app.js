// import functions and grab DOM elements
const goblinEl = document.getElementById('goblin-section');
const goblinForm = document.getElementById('challenge-goblin');
// let state
const goblinsList = [
    {
        name: 'lawson',
        hp: 5,
    },
    {
        name: 'ryan',
        hp: 6,
    },
];


goblinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(goblinForm);
    const goblinName = data.get('goblin-name');
    const newGoblin = {
        name: goblinName,
        hp: 3,
    };
    goblinsList.push(newGoblin);

    displayGoblins();
});






function renderGoblin(goblin) {
    const goblinContainer = document.createElement('div');
    goblinContainer.textContent = `I am ${goblin.name} 👺 and i have ${goblin.hp} health left`;
    goblinContainer.classList.add('goblin-style');
    return goblinContainer;
}

function displayGoblins() {
    goblinEl.textContent = '';
    for (let goblin of goblinsList) {
        const goblinDiv = renderGoblin(goblin);
        goblinEl.append(goblinDiv);
    }


    goblinEl.addEventListener('click', () => {
       
    });

}


displayGoblins();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
