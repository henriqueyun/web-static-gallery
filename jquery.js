$(document).ready(function (){

    var bg = $("#boxpicture");
    document.getElementById("boxpicture").style.backgroundImage = "img/flyngBroom.jpg";
    
    var bgselector = ["img/flyngBroom.jpg",
    "img/flyngHouse.jpg","img/house.jpg",
        "img/rngHouse.jpg","img/slpngTotoro.jpg",
        "img/treeBridge.jpg"];


    var x = 0;
              
    bg.css({"background-image":"url('" + bgselector[x] + "')"});     

    //anterior 
    $("#btprevious").click(changeBackground);
    $("#btnext").click(changeBackground);
    $(document).keydown(changeBackground);

    /*function verifyKey(event){
         if(event.keyCode == 37){
         
                alert("key released: " + event.keyCode);
               changeBackground(event);
            }
        else{
            if(event.keyCode == 39){
                alert("key released: " + event.keyCode);
                changeBackground(event); 
            }
        }
    }*/

    function changeBackground(event){

        
        if(event.target.id == "btprevious" || event.keyCode == 37){
                if(x != 0){x--;
                alert("Bg id: " + x + "Bg name: " + bgselector[x])
                bg.css({"background-image":"url('" + bgselector[x] + "')"});
            }
        }
        else{
                if(x != 5 || event.keyCode == 39){x++;
                alert("Bg id: " + x + "Bg name: " + bgselector[x])
                bg.css({"background-image":"url('" + bgselector[x] + "')"});
            }
        }
       
        
    }

});