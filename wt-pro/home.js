var menu = document.getElementById("menu");
var icon=document.getElementsByClassName("icon-solid");
console.log("hello");
menu.addEventListener("click", function () {

    if(menu.value=="0"){
        menu.innerHTML="<i class='fa-solid fa-xmark fa-2xl fa-pen'></i>"
        menu.style.color="white";
        document.getElementById("options").style.visibility="visible";
        menu.value="1";
        for(var i=0;i<icon.length;i++){
            icon[0].style.color="white";
        }

        
    }
    else{
        // document.getElementById("options").style.animation="formenu 5s linear"
        document.getElementById("options").style.visibility="hidden";
        menu.value="0";
        menu.style.color="black";
        menu.innerHTML="<i class='fa-solid fa-bars fa-2xl'></i>";
    }

        //   menu.innerHTML="<i class='fa-solid fa-xmark-large'></i>";
//   menu.appendChild("<i class='fa-solid fa-xmark-large'></i>");
});

