
var n=document.querySelectorAll(".drum").length;


for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(e){
        // console.log(e);
        var exp = this.innerHTML;
        makesound(exp);
        buttonAnimation(exp);
    });

    $
}


document.addEventListener("keydown",function(e){
    // console.log(e.key);
    var exp = e.key;
    makesound(exp);
    buttonAnimation(exp);

})


function makesound(exp){
    switch (exp) {
            

        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

            case "a":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

        case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

        case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

        case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;



    default:
        break;
}
}

function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },200);
}



     




























// for(var i=0;i<n;i++){
//     if(i==0){
//         document.querySelectorAll(".drum")[0].addEventListener("click", function(){
//             var audio = new Audio("sounds/crash.mp3");
//             audio.play();
//         })
//     }
//     else if(i==1){
//         document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//             var audio = new Audio("sounds/kick-bass.mp3");
//             audio.play();
//         })
//     }
//     else if(i==2){
//         document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//             var audio = new Audio("sounds/snare.mp3");
//             audio.play();
//         })
//     }
//     else if(i==3){
//         document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//             var audio = new Audio("sounds/tom-1.mp3");
//             audio.play();
//         })
//     }

//     else if(i==4){
//         document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//             var audio = new Audio("sounds/tom-2.mp3");
//             audio.play();
//         })
//     }

//     else if(i==5){
//         document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//             var audio = new Audio("sounds/tom-3.mp3");
//             audio.play();
//         })
//     }

//     else if(i==6){
//         document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//             var audio = new Audio("sounds/tom-4.mp3");
//             audio.play();
//         })
//     }
// }






