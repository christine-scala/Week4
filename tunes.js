/* 
 create a function that gets called when we click the button
 going to create a globally scoped array. Right now it should be empty
 */

function jukebox() {
    var songChoice = document.getElementById("request").value;


if (songChoice !== null || songChoice !== "") {
    document.getElementById("request").style.border = "solid 1px green";
    document.getElementById("song").innerHTML = songChoice;
}
}