// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

class GameGoblin {
  constructor(element) {
    this._element = element;
  }
  addGoblin() {
    const gameTds = this._element.querySelectorAll(".game-td");
    let number = Math.floor(Math.random() * gameTds.length);
    const goblin = document.createElement("div");
    goblin.classList.add("goblin");
    gameTds[number].append(goblin);
    this.removeGoblin(goblin);
  }
  removeGoblin(td) {
    setTimeout(() => {
      td.remove();
    }, 1000);
  }
}

const goblinGame = new GameGoblin(document.querySelector(".game-block"));

setInterval(() => {
  goblinGame.addGoblin();
}, 1000);
