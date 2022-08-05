// import functions and grab DOM elements
const goblinEl = document.getElementById('goblin-section');
const goblinForm = document.getElementById('challenge-goblin');
const playerHpEl = document.getElementById('player-hp');
const killedGoblinsEl = document.getElementById('killed-goblins');
// let state
let playerHp = 10;
let killedGoblins = 0;



const goblinsList = [
    {
        name: 'vez',
        hp: 5,
        emoji: '👺',
    },
    {
        name: 'cruels',
        hp: 6,
        emoji: '👺',
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
    goblinContainer.textContent = `I am ${goblin.name}  ${goblin.emoji} and i have ${goblin.hp} health left`;
    goblinContainer.classList.add('goblin-style');
    return goblinContainer;
}




function displayGoblins() {
    goblinEl.textContent = '';
    for (let goblin of goblinsList) {
        const goblinDiv = renderGoblin(goblin);
        goblinEl.append(goblinDiv);

        goblinDiv.addEventListener('click', () => {
            if (playerHp > 0 && goblin.hp > 0) {
                if (Math.random() > 0.5) {
                    goblin.hp--;
                    alert(`you hit ${goblin.name}`);
                } else {
                    playerHp--;
                    alert(`you missed the goblin! And the goblin hit you`);
                }
                if (goblin.hp === 0) {
                    killedGoblins++;
                    goblin.emoji = '💀';
                }
                if (playerHp === 0) {
                    alert('the game is over!');
                }



                playerHpEl.textContent = `You have ${playerHp} hp`;
                killedGoblinsEl.textContent = `You have killed ${killedGoblins} goblins`;
                

            }
            displayGoblins();
        });
        
    }


    


}


displayGoblins();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
