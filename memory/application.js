$(document).ready(function(){
  var memory_array = ["fish", "fish", "turtle", "turtle", "pig", "pig", "dog", "dog", "cat", "cat", "snake", "snake", "bird", "bird", "goat", "goat", "hamster", "hamster", "dragon", "dragon"]
  var memory_tile_ids =[];
  var tiles_flipped =0;
Array.protype.memory_tile_shuffle =function(){
  var i =this.length,j,temp;
  while(--i>0){
    j= Math.floor(Math.random()*(i+1));
    temp=this[j];
    this[j]=this[i];
    this[i]=temp;
  }
}
function newBoard(){
  tiles_flipped=0;
  var output='';
  memory_array.memory_tile_shuffle();
  for(var i=0;i<memory_array.length;i++){
    otuput+='<div id= "tile'+i+' " onclick="memoryFlipTile(this,\'' +memory_array[i]+'\')"></div>';
  }
  document.getElementById('memory_board').innerHTML=output;
}
