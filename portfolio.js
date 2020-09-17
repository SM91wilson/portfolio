$(document).ready(function(){
    $(".carousel").carousel({ fullwidth: true });
        // $(".modal").modal();
        AOS.init({
          duration: 1200,
        });
    onClickFunc(); 

})
function onClickFunc(clickedId) {
    console.log(clickedId);

    switch(true){
        case clickedId == "carousel1" :
            $(".project1").fadeIn("slow");
            $(".project2").hide();
            $(".project3").hide();
        break;
        case clickedId == "carousel2":
            $(".project1").hide();
            $(".project2").fadeIn("slow"); 
            $(".project3").hide();
        break;
        case clickedId == "carousel3":
            $(".project1").hide();
            $(".project2").hide(); 
            $(".project3").fadeIn("slow");
            break;
        default:
            $(".project1").hide();
            $(".project2").hide(); 
            $(".project3").hide();
        break;
    }
    }