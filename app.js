// import functions and grab DOM elements
const goblinEl = document.getElementById('goblin-section');
// let state
const goblins = [
    {
        name: 'lawson',
        hp: 5,
    },
    {
        name: 'ryan',
        hp: 6,
    },
];

for (let goblin of goblins) {
    const goblinContainer = document.createElement('div');
    goblinContainer.textContent = `I am ${goblin.name} 👺 and i have ${goblin.hp} health left`;
    goblinContainer.classList.add('goblin-style');
    goblinEl.append(goblinContainer);
}

function renderGoblin() {

}

function displayGoblins() {
  
}




// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
