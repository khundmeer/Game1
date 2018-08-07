import {IBaseStage} from './base.stage';
import {CollisionDetect} from '../utilities/collision';
import {Keyboard} from '../utilities/keyboard';

class PlayerStage implements IBaseStage{
    
    time: number;
    isSetup :boolean;
    isOver : boolean;
    
    update(){}
    
    // this.time += dt;
        // BaseStage.app.addChild();
    
    clearStage(){}
    
    
    
    leftKey: Keyboard;

    setup() {
        this.leftKey = new Keyboard(37);

        this.leftKey.press = () => {
       
        };
    }
}