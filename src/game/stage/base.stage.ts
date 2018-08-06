import {CollisionDetect} from '../utilities/collision';
import {Keyboard} from '../utilities/keyboard';

export class BaseStage {

    time: number;
    static app: any;
    
    update(dt: number) {
        this.time += dt;
        BaseStage.app.addChild();
    }

    
}

var state = new BaseStage();

state.update(0);
console.log(state.time);

BaseStage.app.addChild();