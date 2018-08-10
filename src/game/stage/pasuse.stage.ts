import {IBaseStage} from './base.stage';
import {Keyboard} from '../utilities/keyboard';
import {CollisionDetect} from '../utilities/collision';

class Pause implements IBaseStage
{
    isSetup :boolean;
    time: number;
    isOver : boolean;
    
    setup(){
        //var PauseKey = new Keyboard();
    }
    update(dt){}
    
    // this.time += dt;
        // BaseStage.app.addChild();
    
    clearStage(){}

}