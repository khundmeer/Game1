import { DisplayObject } from "pixi.js";

export interface IGameObj{

    x: number;
    y: number;
    vx: number;
    vy: number;
    value: number;
    isDestroyed: boolean;
    pixiObject: DisplayObject;

    update(dt);
}