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

    private NumberOfEnemies = 5;
    NumofRounds: number;
    CurrentRoundNum: number;
    yPosOfFrienemies: number = 80;
    static didWin: boolean;

    constructor(NumofRounds: number) {
        this.NumofRounds = NumofRounds;
    }

    setup() {

        this.player = new Player(100);
        Game.app.stage.addChild(this.player.pixiObject);

        var RandomNum = Math.floor(Math.random() * this.Frienemies.length);
        for (var i = 0; i < this.NumberOfEnemies; i++) {
           
            this.yPosOfFrienemies += 40;
            
            
            this.Frienemies.push(
                new Frienemy(this.NumofRounds,
                    this.yPosOfFrienemies,
                    this.CurrentRoundNum,
                    i % this.NumberOfEnemies != RandomNum)
            );
        }
        for (var i = 0; i < this.Frienemies.length; i++) {
            Game.app.stage.addChild(this.Frienemies[i].pixiObject);
        }
        this.isSetup = true;
    }

    update() {
        var shouldRoundInit = true;
        let cur_obj: Frienemy;

        for (var i = 0; this.Frienemies.length; i++) {
            cur_obj = this.Frienemies[i];
            cur_obj.update();
            //Collision Detection should be done here.
            if(!cur_obj.isDestroyed && CollisionDetect.hitRectangle(this.player.pixiObject,cur_obj.pixiObject))
            {
                cur_obj.isDestroyed = true;
                Game.CurrentScore += cur_obj.value;
                console.log("We have a hit") ;
                Game.app.stage.removeChild(cur_obj.pixiObject);
                //rm
                if(Game.CurrentScore<0)
                {
                    Game.app.stage.removeChild(this.player.pixiObject);
                    this.isOver = true;//lose
                    PlayStage.didWin = false;
                }
            }


            if (cur_obj.x > 0) {
                shouldRoundInit = false;
            }
        }

        if (shouldRoundInit) {
            this.NextRound();
        }
        if (this.CurrentRoundNum>this.NumofRounds)
        {
            this.isOver = true;//Win
            PlayStage.didWin = true;
            this.clearStage();
        }
    }

    NextRound()
    {
        this.CurrentRoundNum++;

        var RandomNum = Math.floor(Math.random() * this.Frienemies.length);
        let cur_obj: Frienemy;
        
        for (var i = 0; this.Frienemies.length; i++)
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
    }
}