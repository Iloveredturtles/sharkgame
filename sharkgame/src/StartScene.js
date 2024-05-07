import Phaser from "phaser";
export default class StartScene extends Phaser.Scene {
    constructor() {
        super("start-scene");
    }
    init(data) {
        this.startButton = undefined;
        this.score = data.score;
    }
    preload() {
        this.load.image("start", "../public/Assets/image/startbutton.png")
        this.load.image("sea", "../public/Assets/image/sea_background.png" )
    }
    create() {

        this.add.image(900,500, "sea");
        this.startButton = this.add.image(490,300, "start").setInteractive().setScale(0.3)
        this.startButton.once("pointerup", () => {
            this.scene.start("shark-game");
        }, this)
    }
}