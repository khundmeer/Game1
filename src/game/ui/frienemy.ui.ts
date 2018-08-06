import {GameObj} from './base.ui';

class Frienemy extends GameObj{



    constructor(yPos: number, Speed:number, ObjTag: boolean){
        super(yPos, Speed);
    
        let newRec = new PIXI.Graphics();
    
        var color = ObjTag? 0xFF3300 : 0x66CCFF ;//ternary operator
    
        newRec.beginFill(color);
        newRec.lineStyle(4, color, 1);
        newRec.drawRect(0, 0, 33, 33);
        newRec.endFill();
        
        //?? Note that here we need to access Game.AppWidth
        //newRec.x = Game.AppWidth;
        
        this.y = yPos;
        //newRec.name = Name;
        this.vx = Speed;
        this.value = ObjTag? -5 : 10;

        //?? Note that this is the vector that should contain the Frienemies
        //Game.GameObjects.push(newRec);
        
        this.ObjTag = ObjTag;//true/false
        this.isDestroyed = false;
    
        //return newRec;
        
    };
     update(dt)
     {
     this.x -= this.vx;
     }
}