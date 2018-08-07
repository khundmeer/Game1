import {CollisionDetect} from '../utilities/collision';
import {Keyboard} from '../utilities/keyboard';
import {Application} from 'pixi.js'

export interface IBaseStage {

    time: number;
    isOver : boolean;
    
    setup();
    update(dt: number);
    
    // this.time += dt;
        // BaseStage.app.addChild();
    
    clearStage();

}

// var state = new BaseStage();

// state.update(0);
// console.log(state.time);

// BaseStage.app.addChild();