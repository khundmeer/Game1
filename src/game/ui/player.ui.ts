import {IGameObj} from './base.ui';
import { Game } from '../game';
import { Graphics, Sprite } from "pixi.js";
import {Keyboard} from '../utilities/keyboard'
import { ImageLoader, ImageIds } from '../utilities/image-loader';

export class Player implements IGameObj{

    x: number;
    y: number;
    vx: number;
    vy: number;
    value: number;
    isDestroyed: boolean;
    pixiObject: PIXI.Sprite;
    Player_Speed: number = 4;
    left : Keyboard = new Keyboard(37);
    up : Keyboard = new Keyboard(40);
    right : Keyboard = new Keyboard(39);
    down : Keyboard = new Keyboard(38);

    private topBound: number;
    private lowBound: number;
    constructor(yPos: number)
    {
        this.topBound = .10 * Game.AppHeight + 20;
        this.pixiObject = new PIXI.Sprite(ImageLoader.texterById(ImageIds.Globie));
        this.pixiObject.height = 25;
        this.pixiObject.width = 25;
        this.x = Game.AppWidth /2;
        this.y = yPos;
        this.lowBound = Game.AppHeight - this.pixiObject.width;    

    //     this.pixiObject = new Graphics();
    //     this.pixiObject.beginFill(0xFFFF00);
    //     this.pixiObject.lineStyle(4, 0x008000, 1);
    //     this.pixiObject.drawRect(0, 0, 25, 25);
    //   //rectangle.drawRect(   x    ,   y      , width, height);
    //     this.pixiObject.endFill();
    //     this.pixiObject.x = 0;
    //     this.pixiObject.y = Game.AppHeight/2;

        //keyboard kys   
    
    
    this.left.press = () => {
        //Change the rectangle's velocity when the key is pressed
        this.vx = -this.Player_Speed;
        this.vy = 0;
      };
      
      //Left arrow key `release` method
      this.left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the rectangle isn't moving vertically:
        //Stop the rectangle
        if (!this.right.isDown && this.vy === 0) {
            this.vx = 0;
        }
      };
    
      //Up
      this.up.press = () => {
        this.vy = this.Player_Speed;
        this.vx = 0;
      };
      this.up.release = () => {
        if (!this.down.isDown && this.vx === 0) {
            this.vy = 0;
        }
      };
    
      //Right
      this.right.press = () => {
        this.vx = this.Player_Speed;
        this.vy = 0;
      };
      this.right.release = () => {
        if (!this.left.isDown && this.vy === 0) {
            this.vx = 0;
        }
      };
    
      //Down
      this.down.press = () => {
        this.vy = -(this.Player_Speed);
        this.vx = 0;
      };
      this.down.release = () => {
        if (!this.up.isDown && this.vx === 0) {
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
        
        if(this.pixiObject.y>=this.topBound && (this.pixiObject.y + this.vy) >=this.topBound)
        {
            this.pixiObject.y += this.vy * dt;
        }
        else
        {
             this.pixiObject.y = this.topBound;
        }

        if(this.pixiObject.y<=this.lowBound && (this.pixiObject.y + this.vy) <=this.lowBound)
        {
            this.pixiObject.y += this.vy * dt;
        }
        else
        {
             this.pixiObject.y = this.lowBound;
        }
    }
}