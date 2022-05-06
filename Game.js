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
    car1.scale = 0.07
    car2 = createSprite(width/2 +100, height -100)
    car2.addImage(car2img)
    car2.scale = 0.07
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
   var index = 0
   for(var plr in allPlayers){
     index = index+1
     var x = allPlayers[plr].positionX
     var y = height - allPlayers[plr].positionY
     carros[index-1].position.x = x
     carros[index-1].position.y = y
    if(index === player.index){
      stroke(10);
      fill('red');
      ellipse(x, y, 60, 60);
      camera.position.x = carros[index - 1].position.x
      camera.position.y = carros[index - 1].position.y
    }
  }
   this.handlePlayerControls()
   drawSprites()
 }
    }

    handlePlayerControls(){
      if(keyIsDown(UP_ARROW)){
        player.positionY+=10
        player.update()
      }
    }

  }