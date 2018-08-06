import {GameObj} from './base.ui';
import { Graphics } from 'pixi.js';


class Frienemy extends GameObj{

    isEnemy: boolean;
    pixiObject: Graphics;

    constructor(yPos: number, Speed:number, isEnemy: boolean){
        super(yPos, Speed);

    
        this.pixiObject = new Graphics();
    
        var color = isEnemy? 0xFF3300 : 0x66CCFF ;//ternary operator
    
        this.pixiObject.beginFill(color);
        this.pixiObject.lineStyle(4, color, 1);
        this.pixiObject.drawRect(0, 0, 33, 33);
        this.pixiObject.endFill();
        
        //?? Note that here we need to access Game.AppWidth
        //newRec.x = Game.AppWidth;
        
        this.y = yPos;
        //newRec.name = Name;
        this.vx = Speed;
        this.value = isEnemy? -5 : 10;

        //?? Note that this is the vector that should contain the Frienemies
        //Game.GameObjects.push(newRec);
        
        this.isEnemy = isEnemy;//true/false
    
        //return newRec;
        
    };
     update(dt)
     {
     this.x -= this.vx;
     }
}