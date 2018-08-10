import { Game } from "./game/game";

console.log('B4 game is created');


var latest = new Game();


document.addEventListener("DOMContentLoaded", () => {
    latest.setup();
    //latest.update();
});

//number string boolean