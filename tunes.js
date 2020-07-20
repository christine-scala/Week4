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

var tunes = ["Piano man,", "Meant to Be,", "Bang!"];

/* was tring to get what the user typed be aded to the string.
tunes.push(song);
document.getElementById("music").innerHTML;
*/

var lullabye = 
    document.getElementById("music").innerHTML;

for (var i=0; i < tunes.length; i++){
  console.log(lullabye);
  lullabye = lullabye + "\n" + tunes[i];
  
  document.getElementById("music").innerHTML = lullabye;
}