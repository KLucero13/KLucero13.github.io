$(document).ready(function(){
  var card_array=["fish","fish","turtle","turtle","pig","pig","dog","dog","cat","cat","snake","snake","bird","bird","goat","goat","hampster","hampster","dragon","dragon"]
}
$(document).ready(function(){
  for(i=1; i<21; i++){
    $('#card_holder').append('<div class="card"><p>'+i+'</p></div>');
  }
  function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
  var shuffled_array = shuffle(card_array);
  for(i in shuffled_array){
    $('#card_holder').append('<div class="card"><p>'+shuffled_array[i]+'</p></div>');
  } 
    var click_count= 0;
    var click_1= 'nothing';
    var click_2= 'nothing';
  $(".card").click (function() {
     $(this).find('p').css("opacity",1);
      click_1 = $(this).find('p').text();
  });  
  if(click_1 != click_2)
};
card1="none",
    $('.card').on('click',function(){
      $mycard=$(this).find('p');
      $mycard.css('opacity',1);
      card1=$mycard.html();
    }
