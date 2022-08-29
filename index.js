document.onclick = hideMenu;
document.oncontextmenu = rightClick;


function hideMenu(){
    document.getElementById("value").style.display="none";
    e.preventDefault();
}
function rightClick(e) {
    e.preventDefault();
    if(document.getElementById("value").style.display=="block"){
        hideMenu();
        
    }else{
         var menuValue = document.getElementById("value"); 
         menuValue.style.display='block';
         menuValue.style.left = e.pageX + "px";
         menuValue.style.top = e.pageY + "px";
    }
}
