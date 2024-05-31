var btnColor =["green","red", "yellow","blue"];
var gamePattern=[]
var userClickedPattern=[]

$(document).keypress(function(){
    $("#level-title").html("level 1")
    game()
})

function game(){
    nextSequnce()
    $(".btn").click(function(){
        var userChosenColour = $(this).attr("id")
        userClickedPattern.push(userChosenColour)
        console.log(userChosenColour)
        $("#"+userChosenColour).addClass("pressed")
        setTimeout(function(){
            $("#"+userChosenColour).removeClass("pressed")
        },100)
        var audio = new Audio("./sounds/"+userChosenColour+".mp3")
        audio.play()
        if(gamePattern.length==userClickedPattern.length){
            check()
        }        
    })
   
    

}


function nextSequnce(){
    var randomNo = Math.floor(Math.random() * 4)
    var randomChosenColour = btnColor[randomNo] 
    gamePattern.push(randomChosenColour)
    $("#"+randomChosenColour).addClass("pressed")
    setTimeout(function(){
        $("#"+randomChosenColour).removeClass("pressed")
    },100)
    var audio = new Audio("./sounds/"+randomChosenColour+".mp3")
    audio.play()
}
function check(){
    for (var i=0;i<gamePattern.length;i++){
        if(gamePattern[i]==userClickedPattern[i]){
            console.log("correct")
            if(i==gamePattern.length-1){
                userClickedPattern.length=0
                game()
            }
        }
        else{
            console.log("wrong")
        }
    }
}