import { IGameObj } from "./ui/base.ui";
import * as PIXI from 'pixi.js'
import { IBaseStage } from "./stage/base.stage";
import { Mainmenu } from "./stage/mainmenu.stage";


export class Game {

    static app: any;
    static GameTime: number;

    ScreenWidth: number = window.innerWidth;
    ScreenHeight: number = window.innerHeight;

    static AppWidth: number = 50;
    static AppHeight: number = 50;

    static CurrentScore: number;
    static HighScore: number;

    Stages: IBaseStage[];
    ActiveStage: IBaseStage;
    ActiveStageId: number = 0;

    constructor() {
        console.log("In the constructor");
    }
    setup() {
        console.log('In the Game:setup');

        let type = "WebGL"
        if (!PIXI.utils.isWebGLSupported()) {
            type = "canvas";
        }
        PIXI.utils.sayHello(type);

        Game.app = new PIXI.Application(Game.AppWidth, Game.AppHeight);
        //(width: Game.AppWidth, height: Game.AppHeight);
        Game.app.renderer.backgroundColor = 0x000000;

        var MidLeft = (this.ScreenWidth / 2) - (Game.AppWidth / 2);
        var MidTop = (this.ScreenHeight / 2) - (Game.AppHeight / 2);

        Game.app.view.style.left = MidLeft;
        Game.app.view.style.top = MidTop;
        Game.app.view.style.position = "relative";
        Game.app.renderer.autoResize = true;

        document.body.appendChild(Game.app.view);
        this.addStages; //adding all the GameStages

        Game.app.ticker.add(delta => this.update(delta));
    }

    update(dt) {

        if (!this.ActiveStage.isSetup) {
            this.ActiveStage.setup();
        }
        else {
            this.ActiveStage.update();
        }
        if (this.ActiveStage.isOver) {

            this.nextStage();
        }
    }


    addStages() {

        this.Stages = [new Mainmenu()];
        this.ActiveStage = this.Stages[this.ActiveStageId];

        //this.ActiveStage = new Mainmenu();

        //stages[MM, P, GO]
        //activeStage = stages[activeStageId];

    }

    nextStage() {

        if (this.ActiveStageId < this.Stages.length) {
            this.ActiveStage = this.Stages[++this.ActiveStageId];
        }
        else {
            this.ActiveStageId = 0;
            this.ActiveStage = this.Stages[this.ActiveStageId];
        }
    }
    //nextStage() { //activeStage = stages[++activeStageId]}
}
