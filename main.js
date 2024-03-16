var links=document.getElementsByClassName("tablinks");
var contents=document.getElementsByClassName("tabcontents");
function opentab(tabname){
    for(tablink of links){
        tablink.classList.remove("active");
    }
    for(tabcontent of contents){
        tabcontent.classList.remove("activetab");
    }
   
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("activetab");

}
var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";

}
function closemenu(){
    sidemenu.style.right="-200px";
}