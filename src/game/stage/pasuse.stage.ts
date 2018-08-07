import {IBaseStage} from './base.stage';
import {Keyboard} from '../utilities/keyboard';
import {CollisionDetect} from '../utilities/collision';

class Pause implements IBaseStage
{
    
    time: number;
    app: any;
    isOver : boolean;
    
    setup(){}
    update(dt: number){}
    
    // this.time += dt;
        // BaseStage.app.addChild();
    
    clearStage(){}

}