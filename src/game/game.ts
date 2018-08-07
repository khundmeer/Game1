import { IGameObj } from "./ui/base.ui";
import * as PIXI from 'pixi.js'
export class Game {
    
    static app: any;
    static GameTime: number;

    ScreenWidth : number;
    ScreenHeight : number;

    static AppWidth: 50;
    static AppHeight: 50;

    static CurrentScore : number;
    static HighScore : number;


    constructor() {
        console.log("In the constructor");
        let type = "WebGL"
        if(!PIXI.utils.isWebGLSupported())
        {
            type = "canvas";
        }
        PIXI.utils.sayHello(type);
        Game.app = new PIXI.Application(Game.AppWidth, Game.AppHeight);
        //(width: Game.AppWidth, height: Game.AppHeight);
        Game.app.renderer.backgroundColor = 0x000000;
        
        var MidLeft = (this.ScreenWidth/2) - (Game.AppWidth/2);
        var MidTop = (this.ScreenHeight/2) - (Game.AppHeight/2);

        Game.app.view.style.left = MidLeft;
        Game.app.view.style.top = MidTop;
        Game.app.view.style.position = "relative";
        Game.app.renderer.autoResize = true;
        document.body.appendChild(Game.app.view);

    }
    run(num:number)
    {
        console.log(num);
    }

}
