import { Game } from "./game/game";
import { ImageLoader } from "./game/utilities/image-loader";

console.log('B4 game is created');


var latest = new Game();

document.addEventListener("DOMContentLoaded", () => {
    
    ImageLoader.load(()=>latest.setup());
    //latest.update();
});





//number string boolean