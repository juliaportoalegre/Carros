class Player {
  constructor() {
 this.name= null;
 this.index= null
 this.positionX=0
 this.positionY=0
  }
  getCount(){
    var playerCountref = database.ref("playerCount")
    playerCountref.on("value",data => {
      playerCount = data.val()
    })
  }updateCount(count){
    database.ref("/").update({
      playerCount:count
    })
  }
    getDistance(){
      var DistanceRef = database.ref("players/player"+ this.index)
      DistanceRef.on('value', data =>{
        var data = data.val()
          this.positionX = data.positionX
          this.positionY = data.positionY
      })
    }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX:this.positionX, 
      positionY:this.positionY
    })
  }
  addPlayer(){
    var playerIndex = "players/player"+this.index
    if (this.index === 1){
      this.positionX=width/2-100
    }
    else{
      this.positionX=width/2+100
    }database.ref(playerIndex).set({name:this.name, 
    positionX:this.positionX, 
  positionY:this.positionY})
  }
  static getPlayersInfo(){
    var playerInfoRef = database.ref("players")
    playerInfoRef.on('value', data=>{
      allPlayers = data.val();
    })
  }
}
