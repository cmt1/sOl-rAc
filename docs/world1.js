//set up first level 

class world1 extends Phaser.Scene {
    constructor() {
        super({
            key: "world1"
        });
    }
    //loads images
    preload() {

        this.load.image('Back', 'asset/UP-Bg.png')
        this.load.image('Los', 'asset/Sprite-Carlos1.png')
        this.load.image('Los2', 'asset/Sprite-Carlos2.png')
        this.load.image('Bag', 'asset/Sprite-PunchBag1.png')
        this.load.image('Bag', 'asset/Sprite-PunchBag2.png')
        this.load.image('Open', 'asset/UP-fullc.png')
        this.load.image('Full', 'asset/UP-full.png')
        this.load.image('LosS', 'asset/Sprite-Carlos-Sheet.png', 64, 32)
        this.load.audio('Move', '')
        this.load.audio('Punch', '')

    }

    // adds all the objects that will placed in game
    create() {
        //places image on screen
        this.image = this.add.image(400, 315, 'Back')
        this.image2 = this.add.image(400, 455, 'Full')
        this.image4 = this.add.image(400, 455, 'Open')
        this.image1 = this.add.image(70, 480, 'LosS')
        this.image3 = this.add.image(400, 485, 'Bag')
        

        //this helps is how to control image movement with a button press

        //  this.input.keyboard.on("keyup_D", function (event) {
        //     this.image.x += 40;
        //}, this);

        //primary controls
        this.input.keyboard.on("keydown_A", function (event) {
            this.image1.x -= 10;
        }, this);
        this.input.keyboard.on("keydown_D", function (event) {
            this.image1.x += 10;
        }, this);
        this.input.keyboard.on("keydown_W", function (event) {
            this.image1.y -= 10;
        }, this);

        this.input.keyboard.on("keydown_S", function (event) {
            this.image1.y += 10;
        }, this);

        //secondary controls
        this.input.keyboard.on("keydown_LEFT", function (event) {
            this.image1.x -= 10;
        }, this);
        this.input.keyboard.on("keydown_RIGHT", function (event) {
            this.image1.x += 10;
        }, this);
        this.input.keyboard.on("keydown_UP", function (event) {
            this.image1.y -= 10;
        }, this);

        this.input.keyboard.on("keydown_DOWN", function (event) {
            this.image1.y += 10;
        }, this);


        //mobile controls
        this.input.keyboard.on("pointerdown", function (event) {
            this.image1.x -= 10;
        }, this);
        this.input.keyboard.on("keydown_RIGHT", function (event) {
            this.image1.x += 10;
        }, this);
        this.input.keyboard.on("keydown_UP", function (event) {
            this.image1.y -= 10;
        }, this);

        this.input.keyboard.on("keydown_DOWN", function (event) {
            this.image1.y += 10;
        }, this);

    }

}
