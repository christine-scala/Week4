//create empty array
tunes = [];

function jukebox() {
// grab text (value) from input id=request
    var songChoice = document.getElementById("request").value;

// create for loop saying as long as input is not empty
    if (songChoice !== null || songChoice !== "") {
  
//put a green border around box if input is not empty
    document.getElementById("request").style.border = "solid 1px green";
//add the value of the requested song (now nicknamed my var songChoice) into my array 
    tunes.push(songChoice);
//make an empty storage container to hold requests
    var content = "";
//start a loop - add contents of storage container to array 
        for (var i=0; i < tunes.length; i++){
        content += tunes[i]; 
        content += " ";
        }
//send the contents of storage container out to screen
document.getElementById("music").innerHTML = content
    }
}
