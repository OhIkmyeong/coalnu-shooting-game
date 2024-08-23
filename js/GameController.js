import { GameModel } from "./GameModel.js";
import { GameView } from "./GameView.js";

export class GameController{
    constructor(){
        if(GameController.instance){
            return GameController.instance;
        }
        GameController.instance = this;

        this.MODEL = new GameModel();
        this.VIEW = new GameView();

        this.ctx = this.VIEW.ctx;
    }//constructor

    /**
     * Model의 정보들을 하이스코어 빼고 다 리셋
     */
    reset(){
        /* canvas,ctx */
        this.VIEW.set_initial();

        /* reset */
        this.MODEL.reset_all_model();

        /* 하이스코어 가져오기 */
        this.MODEL.get_highscore();
        this.VIEW.display_highscore(this.MODEL.highScore);

        /* 확인 */
        this.MODEL.show_info();

        /* 이미지 로딩 */
        this.VIEW.load_all_imgs();

    }//reset
}//class-GameController