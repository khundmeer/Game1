import {IGameObj} from './base.ui';
import { Game } from '../game';
import { Graphics } from "pixi.js";
import {Keyboard} from '../utilities/keyboard'

export class Player implements IGameObj{

    x: number;
    y: number;
    vx: number;
    vy: number;
    value: number;
    isDestroyed: boolean;
    pixiObject: Graphics;
    Player_Speed: number = 4;

    constructor(yPos: number)
    {
        this.pixiObject = new Graphics();
        this.pixiObject.beginFill(0xFFFF00);
        this.pixiObject.lineStyle(4, 0x008000, 1);
        this.pixiObject.drawRect(0, 0, 25, 25);
      //rectangle.drawRect(   x    ,   y      , width, height);
        this.pixiObject.endFill();
        this.pixiObject.x = 0;
        this.pixiObject.y = Game.AppHeight/2;

        //keyboard kys
        let left = new Keyboard(37),
        up = new Keyboard(38),
        right = new Keyboard(39),
        down = new Keyboard(40);
    
    
    
    left.press = () => {
        //Change the rectangle's velocity when the key is pressed
        this.vx = -this.Player_Speed;
        this.vy = 0;
      };
      
      //Left arrow key `release` method
      left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the rectangle isn't moving vertically:
        //Stop the rectangle
        if (!right.isDown && this.vy === 0) {
            this.vx = 0;
        }
      };
    
      //Up
      up.press = () => {
        this.vy = -this.Player_Speed;
        this.vx = 0;
      };
      up.release = () => {
        if (!down.isDown && this.vx === 0) {
            this.vy = 0;
        }
      };
    
      //Right
      right.press = () => {
        this.vx = this.Player_Speed;
        this.vy = 0;
      };
      right.release = () => {
        if (!left.isDown && this.vy === 0) {
            this.vx = 0;
        }
      };
    
      //Down
      down.press = () => {
        this.vy = this.Player_Speed;
        this.vx = 0;
      };
      down.release = () => {
        if (!up.isDown && this.vx === 0) {
            this.vy = 0;
        }
      };


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