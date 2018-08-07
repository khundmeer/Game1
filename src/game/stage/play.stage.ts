import {IBaseStage} from './base.stage';
import {Keyboard} from '../utilities/keyboard';
import {CollisionDetect} from '../utilities/collision';
import {Player} from '../ui/player.ui';


class Play implements IBaseStage
{
    time: number;
    isSetup :boolean;
    isOver : boolean;
    player;

    constructor()
    {
        this.player = new Player(100);
    }
    setup()
    {

    }
    update(){}
    
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