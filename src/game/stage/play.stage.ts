import { IBaseStage } from './base.stage';

import { Keyboard } from '../utilities/keyboard';
import { CollisionDetect } from '../utilities/collision';
import { Game } from '../game';

import { IGameObj } from '../ui/base.ui'
import { Player } from '../ui/player.ui';
import { Frienemy } from '../ui/frienemy.ui'


export class PlayStage implements IBaseStage {
    time: number;
    isSetup: boolean;
    isOver: boolean;

    player: Player;
    Frienemies: Frienemy[] = [];

    private NumberOfEnemies = 8;
    NumofRounds: number;
    CurrentRoundNum: number = 1;
    yPosOfFrienemies: number = 80;
    private roundDelay: number = 150;
    private roundDelayTimer: number = 0;
    static ScoreDisplay : Text;
    static HighScore : Text;
    constructor(NumofRounds: number) {
        this.NumofRounds = NumofRounds;
    } 

    setup() {
        this.player = new Player(Game.AppHeight/2);
        Game.app.stage.addChild(this.player.pixiObject);

        var RandomNum = Math.floor(Math.random() * this.Frienemies.length);
        for (var i = 0; i < this.NumberOfEnemies; i++) {
           
            this.Frienemies.push(
                new Frienemy(this.NumofRounds,
                    this.yPosOfFrienemies + (40 * i),
                    this.CurrentRoundNum,
                    i % this.NumberOfEnemies != RandomNum)
            );
        }
        for (var i = 0; i < this.Frienemies.length; i++) {
            Game.app.stage.addChild(this.Frienemies[i].pixiObject);
        }

        Game.app.stage.addChild(Game.CurScoreDisp);
        Game.CurScoreDisp.position.set(50,50);
        // var line = new PIXI.GraphicsData(Game.AppWidth,0xFFFFFF,2,0xFFFFFF,2,false,false,line,2);
        //     Game.app.stage.addChild(line);

        this.isSetup = true;
    }

    update(dt) {
        var shouldRoundInit = true;
        var cur_obj: Frienemy;
        

        this.player.update(dt);
        for (var i = 0; i < this.Frienemies.length; i++) {
            cur_obj = this.Frienemies[i];
            cur_obj.update(dt);
            //Collision Detection should be done here.
            if(!cur_obj.isDestroyed && CollisionDetect.hitRectangle(this.player.pixiObject,cur_obj.pixiObject))
            {
                cur_obj.isDestroyed = true;
                Game.CurrentScore += cur_obj.value;
                Game.app.stage.removeChild(cur_obj.pixiObject);
                //rm
                if(Game.CurrentScore<0)
                {
                    Game.app.stage.removeChild(this.player.pixiObject);
                    this.isOver = true;//lose
                    Game.didWin = false;
                }
            }


            if (cur_obj.x > -cur_obj.pixiObject.width) {
                shouldRoundInit = false;
            }
        }

        if (shouldRoundInit) {
            this.roundDelayTimer += dt;
            
            if(this.roundDelayTimer >= this.roundDelay){
                
                    this.NextRound();
                    this.roundDelayTimer = 0;    
            }         

        }
        if (this.CurrentRoundNum >=this.NumofRounds)
        {
            console.log('In didWin Check');
            Game.didWin = true;
            this.isOver = true;//Win
            console.log('isOver is true');

            // this.clearStage();
        }
    }

    NextRound()
    {
        console.log('Next Round');
        this.CurrentRoundNum++;


        var RandomNum = Math.floor(Math.random() * this.Frienemies.length);
        let cur_obj: Frienemy;
        
        for (var i = 0; i < this.Frienemies.length; i++)
        {
            cur_obj = this.Frienemies[i];
            if(cur_obj.isDestroyed){
                Game.app.stage.addChild(cur_obj.pixiObject);
            }
            cur_obj.RoundInit(this.CurrentRoundNum,i % this.NumberOfEnemies != RandomNum);
        }
    }
    //NextRound()
    //for enemies, 
        //add to stage: destoryed
        //init 
    //currentRound++

    //Create Frienemies
    //Create Player
//Added these to the stage
    //isSetup is true

    //in update check for their collision
    //if they collide with friend increase Game.CurrentScore
    //upon collision of an enemy clear() everything isOver is true.


    //Clear the player along with the Frienemies.
    clearStage() {
        Game.app.stage.removeChild(this.player.pixiObject);

        for (var i = 0; i < this.Frienemies.length; i++) {
            Game.app.stage.removeChild(this.Frienemies[i].pixiObject);
        }
        
        this.isSetup = false;
        this.isOver = false;
        this.Frienemies = [];
        this.CurrentRoundNum = 0;
    }
}