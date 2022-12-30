class GameGoblin {
  constructor(element) {
    this._element = element;
    this.gameTds = this._element.querySelectorAll(".game-td");
    this.goblin = document.createElement("div");
    this.goblin.classList.add("goblin");
  }

  getNumb(n) {
    return Math.floor(Math.random() * n);
  }
  addGoblin() {
    let number = this.getNumb(this.gameTds.length);

    if (this.gameTds[number].classList.contains("active")) {
      console.log("повтор");
      number = number !== this.gameTds.length - 1 ? number + 1 : 0;
    }
    this.gameTds.forEach((item) => item.classList.remove("active"));
    console.log(number);
    this.gameTds[number].classList.add("active");
    console.log(Number(this.gameTds[number].getAttribute("data-id")) - 1);
    this.gameTds[number].append(this.goblin);
    this.update(this.goblin);
  }
  update(td) {
    setTimeout(() => {
      td.remove();
      this.addGoblin();
    }, 1000);
  }
}

const goblinGame = new GameGoblin(document.querySelector(".game-block"));

goblinGame.addGoblin();
