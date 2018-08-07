import { IGameObj } from './base.ui';
import { Graphics } from 'pixi.js';
import { Game } from '../game'

class Frienemy implements IGameObj {

    x: number;
    y: number;
    vx: number;
    vy: number;
    value: number;
    isDestroyed: boolean;
    isEnemy: boolean;
    pixiObject: Graphics;
    
    constructor(yPos: number, Speed: number, isEnemy?: boolean) {

        this.pixiObject = new Graphics();
        if(isEnemy)
        var color = isEnemy ? 0xFF3300 : 0x66CCFF;//ternary operator

        this.pixiObject.beginFill(color);
        this.pixiObject.lineStyle(4, color, 1);
        this.pixiObject.drawRect(0, 0, 33, 33);
        this.pixiObject.endFill();

        //Resolved: Note that here we need to access Game.AppWidth
        this.x = Game.AppWidth;

        this.y = yPos;
        //newRec.name = Name;
        this.vx = Speed;
        this.value = isEnemy ? -5 : 10;

        //?? Note that this is the vector that should contain the Frienemies
        //Game.GameObjects.push(newRec);

        this.isEnemy = isEnemy;//true/false

        //return newRec;

    }
    update(dt) {
        this.x -= this.vx;

        if (this.x <= 0)
        {
            this.positionReset();
        }
    }

    positionReset() {
        this.x = Game.AppWidth + 10;

    }

    ChangeEnemyStatus()
    {

        // this.isEnemy = false;
        // this.pixiObject.beginFill(color);
        // this.pixiObject.lineStyle(4, color, 1);
    }


}