import { IGameObj } from './base.ui';
import { Graphics, Sprite } from 'pixi.js';
import { Game } from '../game'
import { ImageLoader, ImageIds } from '../utilities/image-loader';

export class Frienemy implements IGameObj {

    x: number;
    y: number;
    vx: number;
    vy: number;

    value: number;

    MaxSpeed: number = 15;
    MinSpeed: number = 3;
    PercentSpeedPerRound: number;

    isDestroyed: boolean;
    isEnemy: boolean;
    pixiObject: Sprite;

    constructor (NumofRounds: number, yPos: number, CurrRoundNum: number, isEnemy:boolean) {
        
        
        var FrienemyTexture= isEnemy?
            ImageLoader.texterById(ImageIds.Enemy) : 
            ImageLoader.texterById(ImageIds.Friend);
        this.pixiObject = new Sprite(FrienemyTexture);
        this.y = yPos;
        // this.pixiObject = new Graphics();
        this.PercentSpeedPerRound = this.MaxSpeed/NumofRounds;

        //Resolved: Note that here we need to access Game.AppWidth

        // this.y = yPos;
        this.RoundInit(CurrRoundNum, isEnemy);
    }
    update(dt) {
        this.x -= this.vx;

        
        this.pixiObject.x = this.x;
        this.pixiObject.y = this.y;
    }

    RoundInit(CurrRoundNum: number, isEnemy:boolean)
    {
        this.positionReset();
        this.ChangeEnemyStatus(isEnemy);
        this.ChangeSpeed(CurrRoundNum);

        this.isDestroyed = false;

    }

    private positionReset() {
        this.x = Game.AppWidth + 10;
        this.pixiObject.x = this.x;
        
    }

    private ChangeEnemyStatus(isEnemy: boolean) {

        this.value = isEnemy? -5 : 10;
        var FrienemyTexture= isEnemy?
            ImageLoader.texterById(ImageIds.Enemy) : 
            ImageLoader.texterById(ImageIds.Friend);

        this.pixiObject.texture = FrienemyTexture;

        this.pixiObject.height = 40;
        this.pixiObject.width = 40;
        //var color = isEnemy? 0xFF3300 : 0x66CCFF;//ternary operator    
//??    
        // this.pixiObject.beginFill(color);
        // this.pixiObject.lineStyle(4, color, 1);
        // this.pixiObject.drawRect(0, 0, 33, 33);
        // this.pixiObject.endFill();
    }
//Need to do Change Speed
    private ChangeSpeed(CurrRoundNum: number) {
        
        var tempSpeed = (Math.random() * 6) + (this.PercentSpeedPerRound * CurrRoundNum);
        if (tempSpeed > this.MaxSpeed){
            this.vx = this.MaxSpeed + (Math.random() * this.MinSpeed);
        }
        else if (tempSpeed < this.MinSpeed){
            this.vx = this.MinSpeed + (Math.random() * this.MinSpeed);
        }
        else
        {
            this.vx = tempSpeed;
        }    
        
      
    }


}