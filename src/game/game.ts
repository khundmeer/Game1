import { IGameObj } from "./ui/base.ui";
import * as PIXI from 'pixi.js'
import { IBaseStage } from "./stage/base.stage";

import { Mainmenu } from "./stage/mainmenu.stage";
import { PlayStage } from './stage/play.stage'
import { Endgame } from "./stage/endgame.stage";

export class Game {

    static app: any;
    static GameTime: number;

    ScreenWidth: number = window.innerWidth;
    ScreenHeight: number = window.innerHeight;

    static AppWidth: number = 600;
    static AppHeight: number = 400;

    static CurrentScore: number = 0;
    static HighScore: number = 0;

    static didWin: boolean;
    Stages: IBaseStage[];
    ActiveStage: IBaseStage;
    ActiveStageId: number = 0;

    NumberofRounds: number = 3;

    constructor() {
    }
    setup() {

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


        //Works
        this.addStages(); //adding all the GameStages
        //Somthing is wrong here
        Game.app.ticker.add(delta => this.update(delta));
    }

    update(dt) {

        if (!this.ActiveStage.isSetup) {
            this.ActiveStage.setup();
        }
        else {
            this.ActiveStage.update(dt);
        }
        if (this.ActiveStage.isOver) {
            this.ActiveStage.clearStage();
            this.nextStage();
        }

    }

    addStages() {
        this.Stages = [new Mainmenu(), new PlayStage(this.NumberofRounds), new Endgame()];
        this.ActiveStage = this.Stages[this.ActiveStageId];

        //this.ActiveStage = new Mainmenu();

        //stages[MM, P, GO]
        //activeStage = stages[activeStageId];

    }

    nextStage() {
        this.ActiveStageId = ++this.ActiveStageId % this.Stages.length;

        this.ActiveStage = this.Stages[this.ActiveStageId];
    }
    //nextStage() { //activeStage = stages[++activeStageId]}
}
