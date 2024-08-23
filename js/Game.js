import { GameController } from "./GameController.js";
import { GameModel } from "./GameModel.js";
import { GameView } from "./GameView.js";

export class Game{
    constructor(){
        this.VIEW = new GameView();
        this.MODEL = new GameModel();
        this.CTRL = new GameController();
    }
    init(){
        this.CTRL.reset();
    }//init

}//Game