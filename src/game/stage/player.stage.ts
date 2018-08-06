import {BaseStage} from './base.stage';
import {CollisionDetect} from '../utilities/collision';
import {Keyboard} from '../utilities/keyboard';

class PlayerStage extends BaseStage{
    leftKey: Keyboard;

    setup() {
        this.leftKey = new Keyboard(37);

        this.leftKey.press = () => {

        };
    }
}