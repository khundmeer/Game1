import { IBaseStage } from './base.stage';
import { Keyboard } from '../utilities/keyboard';
import { CollisionDetect } from '../utilities/collision';
import { Application, Sprite } from 'pixi.js'
import { PlayStage } from './play.stage';
import {Game} from '../game';
import { ImageLoader, ImageIds } from '../utilities/image-loader';

export class Endgame implements IBaseStage {
    time: number;
    isSetup: boolean;
    isOver: boolean;
    EndMessage: PIXI.Text;
    PositionX : number;
    PositionY : number;
    pixiObject : Sprite;
    constructor() {

    }
    setup() {
        console.log("In Endgame setup");
        let style = new PIXI.TextStyle(
        {
            fontFamily: "Arial",
            fontSize: 20,
            fill: "white",
            stroke: '#ff3300',
            strokeThickness: 4,
            dropShadow: true,
            dropShadowColor: "#ff3300",
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
        });
        this.EndMessage = new PIXI.Text("",style);
        Game.app.stage.addChild(this.EndMessage);

        if (Game.didWin)//PlayStage.didWin)
        {
            this.EndMessage.text = "Congratulations! Your Visa Has Been Approved";
            this.pixiObject = new PIXI.Sprite(ImageLoader.texterById(ImageIds.Globie));
            this.pixiObject.height = 100;
            this.pixiObject.width = 100;
            Game.app.stage.addChild(this.pixiObject);
            this.pixiObject.x = Game.AppWidth/2 - this.pixiObject.width/2;
            this.pixiObject.y = Game.AppHeight/2 - this.pixiObject.height/2;

        }
        else
        {
            this.EndMessage.text = "Sorry! Your Visa Has Been Denied!";
            this.pixiObject = new PIXI.Sprite(ImageLoader.texterById(ImageIds.Enemy));
            this.pixiObject.height = 100;
            this.pixiObject.width = 100;

            Game.app.stage.addChild(this.pixiObject);
            this.pixiObject.x = Game.AppWidth/2 - this.pixiObject.width/2;
            this.pixiObject.y = Game.AppHeight/2 - this.pixiObject.height/2;

        }
        this.EndMessage.position.set((Game.AppWidth/2) -(this.EndMessage.width/2),0);
        this.isSetup = true;

        setTimeout(() => {
            this.isOver = true;
        }, 5000);
    }
    update(dt){
    }

    // this.time += dt;
    // BaseStage.app.addChild();

    clearStage() {
        Game.app.stage.removeChild(this.EndMessage);
        Game.app.stage.removeChild(this.pixiObject);
        this.isSetup = false;
        this.isOver = false;
        Game.didWin = undefined;
        

        if(Game.CurrentScore > Game.HighScore){
            Game.HighScore = Game.CurrentScore;
        }

        Game.CurrentScore = 0;
     }

}