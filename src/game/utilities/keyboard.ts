
export class Keyboard {
        code: number;
        isDown: boolean;
        isUp: boolean = true;
        press: () => void;
        release: () => void;
    
    constructor(keyCode: number) 
    {
        this.code = keyCode;
        //The `downHandler`
        
        
    
        //Attach event listeners
        window.addEventListener(
        "keydown", this.downHandler.bind(this), false
        );
        window.addEventListener(
        "keyup", this.upHandler.bind(this), false
        );
    }

    downHandler(event: KeyboardEvent) {
        if (event.keyCode === this.code) {
            if (this.isUp && this.press) this.press();
            this.isDown = true;
            this.isUp = false;
            //only prev default inside the designated key
        event.preventDefault();
        }
        
        };
    
        //The `upHandler`
    upHandler(event: KeyboardEvent){
        if (event.keyCode === this.code) {
            if (this.isDown && this.release) this.release();
            this.isDown = false;
            this.isUp = true;
            event.preventDefault();
        }
    };
}

var ke = new Keyboard(40);