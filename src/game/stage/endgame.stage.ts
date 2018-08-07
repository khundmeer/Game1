import {IBaseStage} from './base.stage';
import {Keyboard} from '../utilities/keyboard';
import {CollisionDetect} from '../utilities/collision';
import {Application} from 'pixi.js'


class Endgame implements IBaseStage
{
    time: number;
    isSetup :boolean;
    isOver : boolean;
    
    setup(){}
    update(){}
    
    // this.time += dt;
        // BaseStage.app.addChild();
    
    clearStage(){}

}