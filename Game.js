class Game {
  constructor() {}
  getState(){
    var gameStateref = database.ref("gameState")
    gameStateref.on("value", function(data){
      gameState = data.val()
    })
  }
  start() {
    player = new Player();
    playerCount=player.getCount();
    form = new Form();
    form.display();
    car1 = createSprite(width/2 -50, height -100)
    car1.addImage(car1img)
    car2 = createSprite(width/2 +100, height -100)
    car2.addImage(car2img)
    carros = [car1, car2]
  }
  update(state){
    database.ref('/').update({gameState:state})
  }
  handleElements(){
    form.hide()
      form.titleImg.position(40, 50)
      form.titleImg.class("gameTilteAfterEffect")
    
  }
  play(){
    this.handleElements()
  Player.getPlayersInfo()
 if(allPlayers!== undefined){
   image(pistaimg, 0, height *5, width, height *6)
   drawSprites()
 }
    }
  }