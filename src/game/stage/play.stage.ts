import {IBaseStage} from './base.stage';
import {Keyboard} from '../utilities/keyboard';
import {CollisionDetect} from '../utilities/collision';
import {IGameObj} from '../ui/base.ui'
import {Player} from '../ui/player.ui';
import {Frienemy} from '../ui/frienemy.ui'

class Play implements IBaseStage
{
    time: number;
    isSetup :boolean;
    isOver : boolean;
    player;
    GameObjects : Frienemy[] = [];
    private NumberOfEnemies = 5;
    Speed: number = 3;
    SpeedVariant: number = 2;
    PositionofFrienemy: number;
    Speeds: number[];
    constructor(Rounds: number)
    {
        
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

        for(var i = 0; i< this.NumberOfEnemies; i++)
        {
            this.GameObjects.push(new Frienemy());
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
    clearStage(){}
}