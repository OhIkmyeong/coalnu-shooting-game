import { GameController } from "./GameController.js";
import { GameModel } from "./GameModel.js";

export class GameView{
    constructor(){
        /* singleton */
        if(GameView.instance){
            return GameView.instance;
        }
        GameView.instance = this;

        this.$cv = null;
        this.ctx = null;

        this.imgs = {
            bg : null,
            spaceship : null,
            evil : null,
            beam : null,
            boom : null,
            gameover : null,
        };

        this.MODEL = new GameModel();
        this.CTRL = new GameController();
    }//constructor

    /**
     * 
     */
    set_initial(){
        this.$cv = document.getElementById("cv");
        this.ctx = this.$cv.getContext("2d");

        this.$cv.width = 400 * 2;
        this.$cv.height = 700 * 2;
    }//set_initial

    /**
     * 
     * @param {*} fileName 
     * @param {*} extensionName 
     * @returns 
     */
    load_image(fileName, extensionName = "png"){
        const $img = new Image();
        $img.src = `img/${fileName}.${extensionName}`;
        return $img;
    }//load_image

    /**
     * 
     */
    display_highscore(highScore){
        const $highscore = document.getElementById("highscore");
        $highscore.textContent = highScore;
    }//display_highscore

    /**
     * 
     */
    load_all_imgs(){
        for(const key in this.imgs){
            const $img = this.load_image(key, key === "gameover" ? "jpg" : "png");
            this.imgs[key] = $img;
        }
    }//load_all_imgs

    /**
     * 
     */
    fill_background(){}//fill_background
}//class-GameView