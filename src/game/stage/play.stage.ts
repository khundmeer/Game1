import {IBaseStage} from './base.stage';
import {Keyboard} from '../utilities/keyboard';
import {CollisionDetect} from '../utilities/collision';

class Play implements IBaseStage
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