//set up first level 

class world1 extends Phaser.Scene {
    constructor() {
        super({
            key: "world1"
        });
    }
    //loads images
    preload() {
        this.load.image('Los', 'asset/Sprite-Carlos1.png')
        this.load.image('Shana', 'asset/Sprite-Lashana1.png')
        this.load.image('Bag', 'asset/Sprite-PunchBag2.png')
    }

    // adds all the objects that will placed in game
    create() {
        //places image on screen
        this.image1 = this.add.image(200, 300, 'Los')
        this.image2 = this.add.image(550, 295, 'Shana')
        this.image3 = this.add.image(350, 295, 'Bag')
        //this helps is how to control image movement with a button press
        this.input.keyboard.on("keyup_D", function (event) {
            this.image.x += 40;
        }, this);


        this.input.keyboard.on("keydown_A", function (event) {
            this.image1.x -= 40;
        }, this);
        this.input.keyboard.on("keydown_D", function (event) {
            this.image1.x += 40;
        }, this);
        this.input.keyboard.on("keydown_W", function (event) {
            this.image1.y -= 40;
        }, this);

        this.input.keyboard.on("keydown_S", function (event) {
            this.image1.y += 40;
        }, this);

        //player 2
        this.input.keyboard.on("keydown_J", function (event) {
            this.image2.x -= 40;
        }, this);
        this.input.keyboard.on("keydown_L", function (event) {
            this.image2.x += 40;
        }, this);
        this.input.keyboard.on("keydown_I", function (event) {
            this.image2.y -= 40;
        }, this);

        this.input.keyboard.on("keydown_K", function (event) {
            this.image2.y += 40;
        }, this);


    }

}
