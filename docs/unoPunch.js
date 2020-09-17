//This is how to configures the game
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'content',
    physics: {
        default: 'arcade',
        arcade: {
    
        }
    },
     dom: {
        createContainer: true
    },
    //This is setting up the different levels
    scene: [ world1 ]
};

//Starts new game with configutions
var game = new Phaser.Game(config); 