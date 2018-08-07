import { IBaseStage } from './base.stage';
import { Keyboard } from '../utilities/keyboard';
import { CollisionDetect } from '../utilities/collision';
import * as PIXI from 'pixi.js'
import { Game } from '../game'

export class Mainmenu implements IBaseStage {

    time: number;
    isSetup: boolean;
    isOver: boolean;
    GameMessage; //PIXI.Text;
    GameMessage1;
    StartKeyMsg;

    setup() {
        let Start = new Keyboard(83);//s
        // up = new Keyboard(38),
        // right = new Keyboard(39),
        // down = new Keyboard(40);

        

        let style = new PIXI.TextStyle(
            {
                fontFamily: "Arial",
                fontSize: 36,
                fill: "white",
                stroke: '#ff3300',
                strokeThickness: 4,
                dropShadow: true,
                dropShadowColor: "#000000",
                dropShadowBlur: 4,
                dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 6,
            });

        this.GameMessage = new PIXI.Text("Globie", style);
        this.GameMessage1 = new PIXI.Text("The Great Traveler", style);
        this.StartKeyMsg = new PIXI.Text("Press 's' to start the Game", style);

        Game.app.stage.addChild(this.GameMessage);
        Game.app.stage.addChild(this.GameMessage1);
        Game.app.stage.addChild(this.StartKeyMsg);

        this.GameMessage.position.set(Game.AppWidth, 40);
        this.GameMessage1.position.set(Game.AppWidth, 90);
        this.StartKeyMsg.position.set(Game.AppWidth, 120);





        this.isSetup = true;

        Start.press = () => {
            //this.clearStage(); This should be done in the Game.Update
            this.isOver = true;
        }

        /**I was in the middle of something here*/


    }
    update() { }

    // this.time += dt;
    // BaseStage.app.addChild();

    clearStage() {

        Game.app.stage.removeChild(this.GameMessage);
        Game.app.stage.removeChild(this.GameMessage1);
        Game.app.stage.removeChild(this.StartKeyMsg);

    }

    //Game.app.ticker.add(delta => Game.update(delta));


}