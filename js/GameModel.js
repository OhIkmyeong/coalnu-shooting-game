import { GameController } from "./GameController.js";
import { GameView } from "./GameView.js";

export class GameModel {
    #posSpaceship = { x: 0, y: 0 };
    #score = 0;
    #highScore = 0;
    #posEvils = [];

    constructor() {
        /* singleton */
        if (GameModel.instance) {
            return GameModel.instance;
        }
        GameModel.instance = this;

        this.VIEW = new GameView();
        this.CTRL = new GameController();
    }//constructor

    /* 🎈🎈🎈🎈🎈[Setter]🎈🎈🎈🎈🎈 */

    /**
     * 
     * @param {Number} highScore 
     */
    set highscore(highScore) { this.#highScore = highScore; }

    get highScore() {
        return this.#highScore;
    }

    /**
     * 점수 설정
     */
    set score(score) { this.#score = score; }

    get score() { return this.#score; }

    /**
     * 
     * @param {*} param0 
     */
    set position_spaceship({ x, y }) {
        this.#posSpaceship.x = x;
        this.#posSpaceship.y = y;
    }//set_position_spaceship

    /**
     * 
     */
    get position_spaceship() {
        return this.#posSpaceship;
    }

    /* 🎈🎈🎈🎈🎈[확인용]🎈🎈🎈🎈🎈 */
    show_info() {
        console.log("🎇>>>>>>>>")
        console.log("highscore", this.#highScore);
        console.log("score", this.#score);
        console.log("pos of spaceship", this.#posSpaceship);
        console.log("pos of evils", this.#posEvils);
        console.log("<<<<<<<<<🎇")
    }//show_info

    /* 🎈🎈🎈🎈🎈[]🎈🎈🎈🎈🎈 */

    /**
     * local Storage에서 가져옴
     */
    get_highscore() { }//get_highscore

    /* 🎈🎈🎈🎈🎈[Control]🎈🎈🎈🎈🎈 */
    /**
     * 
     */
    reset_all_model() {
        this.score = 0;
        this.position_spaceship = {
            x: (this.VIEW.$cv.width / 2) - 48,
            y: (this.VIEW.$cv.height) - 48,
        };
        this.reset_pos_evils();
    }//reset_all_model

    /**
    * 
    */
    reset_pos_evils() {
        this.#posEvils = [];
    }//reset_pos_evils
}//class-GameModel