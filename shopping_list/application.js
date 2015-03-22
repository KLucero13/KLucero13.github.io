$(document).ready(function(){
  $('#submit').on('click', function(){
    var entry = $('input').val();
    $('ul').append("<li>"+entry+"</li>");
  })
});
$(document).ready(function() {

        
        $("#addbutton").click(function(enter) {
           console.log("+ was pressed.");
           postGrocery();
        });
        
        $("#groceries").keydown(function(enter) {
            if (enter.keyCode==13) {
                console.log("enter is pressed.");
                postGrocery();
            }
        });
    //};
    
    //defined getGrocery
    //getGrocery();
    
    function postGrocery() {
        var grocery = $("#groceries").val();
        var listitem = '<li class="notbought"><img src="../shoppingList/images/check.jpg" alt="checkbox" id="checkbox">' +grocery+ '<input type="button" id="delete" value="Delete"> </li>'

        if (grocery.indexOf(" ") !== -1 ) {
            alert("Please enter something to get from the store.");
        }
        else if (grocery == "") {
            alert("Please enter something to get from the store.");
        }
        else {
           $(".items").hide(grocery);
            $(".items").append(listitem).fadeIn(200);
            $("#groceries").val("");
            console.log(grocery);
            console.log(listitem);
        };
    };
    $(document).on("click", "#delete", function() {
        $(this).closest("li").fadeOut(200);
    });
    
  $(document).on("click", "#checkbox", function () {
        if ($(this).closest("li").hasClass("notbought")) {
            $(this).closest("li").addClass("checked").removeClass("notbought");
        } else {
            $(this).closest("li").removeClass("checked").addClass("notbought");
        }
    });
    $(document).on("click", "#checkbox", function () {
        $(this).closest("li").toggleClass("notbought checked");
    });
    $(document).on("click", "#clearall", function () {
        $(".items").empty();
    });
    
    //adding a way to resize the instructions
    $('.instructions').hover(function(){
        $(this).attr('size',4);
    },function(){
        $(this).attr('size',1);
    });
});




