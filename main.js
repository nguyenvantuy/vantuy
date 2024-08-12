$(document).ready(function(){
    $('.headr-toggle').click(function() {
        alert('ok')
    });
})

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}