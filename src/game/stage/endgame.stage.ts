import { IBaseStage } from './base.stage';
import { Keyboard } from '../utilities/keyboard';
import { CollisionDetect } from '../utilities/collision';
import { Application } from 'pixi.js'
import { PlayStage } from './play.stage';
import {Game} from '../game';

export class Endgame implements IBaseStage {
    time: number;
    isSetup: boolean;
    isOver: boolean;
    EndMessage: PIXI.Text;
    didWin: boolean = PlayStage.didWin;
    constructor() {

    }
    setup() {
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

        if (this.didWin)
        {
            this.EndMessage.text = "Congratulations! Your Visa Has Been Approved";
        }
        else
        {
            this.EndMessage.text = "We Are Sorry! Your Visa Has Been Denied";
        }
        this.EndMessage.position.set((Game.AppWidth/3) -(this.EndMessage.width/2),0);

    }
    update(){

    }

    // this.time += dt;
    // BaseStage.app.addChild();

    clearStage() {
        Game.app.stage.removeChild(this.EndMessage);
     }

}