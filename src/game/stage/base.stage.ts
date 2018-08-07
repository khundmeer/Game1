import {CollisionDetect} from '../utilities/collision';
import {Keyboard} from '../utilities/keyboard';
import * as PIXI from 'pixi.js'

export interface IBaseStage {

    time: number;
    isOver : boolean;
    isSetup :boolean;
    setup();
    update();
    
    // this.time += dt;
        // BaseStage.app.addChild();
    
    clearStage();

}

// var state = new BaseStage();

// state.update(0);
// console.log(state.time);

// BaseStage.app.addChild();