class GameGoblin {
  constructor(element) {
    this._element = element;
  }
  getNumb(n) {
    return Math.floor(Math.random() * n);
  }
  addGoblin() {
    const gameTds = this._element.querySelectorAll(".game-td");
    let number = this.getNumb(gameTds.length);
    if (gameTds[number].classList.contains("active")) {
      console.log("повтор");  
      let newNumber = this.getNumb(gameTds.length);
      number = number == newNumber ? this.getNumb(gameTds.length) : newNumber;           
    }
    gameTds.forEach(item => item.classList.remove("active"));
    const goblin = document.createElement("div");
    goblin.classList.add("goblin"); 
    console.log(number);  
    gameTds[number].classList.add("active");
    console.log(Number(gameTds[number].getAttribute('data-id')) - 1);
    gameTds[number].append(goblin);    
    this.removeGoblin(goblin);
  }
  removeGoblin(td) {
    setTimeout(() => {
      td.remove();
      this.addGoblin();
    }, 1000);
  }
}

const goblinGame = new GameGoblin(document.querySelector(".game-block"));

goblinGame.addGoblin();
