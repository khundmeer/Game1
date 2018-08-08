import {IBaseStage} from './base.stage';

import {Keyboard} from '../utilities/keyboard';
import {CollisionDetect} from '../utilities/collision';
import {Game} from '../game';

import {IGameObj} from '../ui/base.ui'
import {Player} from '../ui/player.ui';
import {Frienemy} from '../ui/frienemy.ui'


class Play implements IBaseStage
{
    time: number;
    isSetup :boolean;
    isOver : boolean;
    player;
    Frienemies : Frienemy[] = [];


    private NumberOfEnemies = 5;
    NumofRounds: number;
    CurrentRound: number;
    yPosOfFrienemies: number = 40;
    
    constructor(Rounds: number)
    {
        this.Rounds = Rounds;
        //var NumofSpeeds = Rounds * 5;
        // for ()
        // {
        //     this.Speeds.push(
        //        (Math.floor(Math.random() * this.Speed)+this.SpeedVariant++)
        //     );
        // }
    }

    setup()
    {
        this.player = new Player(100);
        

        var RandomNum = Math.floor(Math.random() * this.Frienemies.length);
        for(var i = 0; i< this.NumberOfEnemies; i++)
        {
            this.Frienemies.push(
                new Frienemy(this.NumofRounds,
                             this.yPosOfFrienemies,
                             this.CurrentRound,
                             i%5 != RandomNum)
            );
        }
        for(var i =0; i<this.Frienemies.length; i++)
        {
            Game.app.stage.addChild(this.Frienemies[i]);
        }
    }

    update()
    {

    }
    //Create Frienemies
    //Create Player
    //Create Speeds
    //isSetup is true

    //in update check for their collision
    //if they collide with friend increase Game.CurrentScore
    //upon collision of an enemy clear() everything isOver is true.

    
    //Clear the player along with the Frienemies.
    clearStage()
    {
        for(var i =0; i<this.Frienemies.length; i++)
        {
            Game.app.stage.removeChild(this.Frienemies[i]);
        }
    }
}