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
function memoryFlipTile(tile,val){
  if(tile.innerHTML==""&&memory_values.length<2{
    tile.style.background='#FFF';
    tile.innerHTML=val;
    if(memory_values.length==0){
      memory_values.push(val);
      memory_tile_ids.push(tile.id);
    }else if(memory_values[0]==memory_values[1]{
      memory_values.push(val);
      memory_tiles_ids.push(tile.id);
      if(memory_values[0]==memory_values[1]){
        tiles_flipped+=2;
        //Clear both arrays
        memory_values=[];
        memory_tile_ids=[];
        //Check to see if the whole board is cleared
        if(tiles_flipped==memory_array.length){
          alert("Board cleared...generating newboard")
          document.getElementById('memoryboard').innerHTML="";
          newBoard();
        }
      }else{
        function flip2Back(){
          //Flip the 2 tiles back over
          var tile_1=document.getElementById(memory_tile_ids[0]);
          var tile_2=document.getElementById(memory_tile_ids[1]);
          tile_1.style.background='url(tile_bg.jpg)no-repeat';
          tile_1.innerHTML="";
          tile_2.style.background='url(tile_bg.jpg)no-repeat';
          tile_2.innerHTML="";
          //Clear both arrays
          memory_values=[];
          memory_tile_ids=[];
        }
        setTimeout(flip2Back,700);
        }
      }
    }
