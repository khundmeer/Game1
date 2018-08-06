import {GameObj} from './base.ui';
import { Game } from '../game';

class Player extends GameObj{

    constructor(yPos: number, Speed:number, ObjTag: boolean){
        super(yPos, Speed);
        
    };
}