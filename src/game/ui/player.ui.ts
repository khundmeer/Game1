import {IGameObj} from './base.ui';
import { Game } from '../game';
import { Graphics } from "pixi.js";


class Player implements IGameObj{

    x: number;
    y: number;
    vx: number;
    vy: number;
    value: number;
    isDestroyed: boolean;
    pixiObject: Graphics;

    constructor(yPos: number, Speed:number)
    {
        this.pixiObject = new Graphics();
        this.pixiObject.beginFill(0xFFFF00);
        this.pixiObject.lineStyle(4, 0x008000, 1);
        this.pixiObject.drawRect(0, 0, 25, 25);
      //rectangle.drawRect(   x    ,   y      , width, height);
        this.pixiObject.endFill();
        this.pixiObject.x = 0;
        this.pixiObject.y = Game.AppHeight/2;
    }
    update(dt)
    {
        if(this.pixiObject.x >= 0 && (this.pixiObject.x + this.vx) >= 0)
        {
            this.pixiObject.x += this.vx * dt;
        }
        else 
        {
            this.pixiObject.x = 0;
        }
        
        if(this.pixiObject.y>0 && (this.pixiObject.y + this.vx) >=0)
        {
            this.pixiObject.y += this.vy * dt;
        }
        else
        {
            this.pixiObject.y = 0;

        }
    }
}