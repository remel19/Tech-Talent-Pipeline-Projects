var myplayList = []; //empty string to store the searched songs.

//a function to capitalize the first letter of a string(in this case the name of the song)
String.prototype.firstLetterCapitalizer = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}//firstLetterCapitalizer

var songIndex = 0; // when the array is empty.
var currentTrack = 0;// to keep track of the current index

$("#frm").submit(function(event) { // immediate function which acts when search button being clicked.
  event.preventDefault(); // prevents the browser from trying to post the input to backends
  var track = $("input").val(); // getting the input value(this case song's title)
  $("#frm")[0].reset(); // makes the input section blank.

  $.ajax({
    url: "https://api.spotify.com/v1/search", // spotify api address
    data: {
      q: track, // searching the track on spotify
      type: "track"
    },
    success: function(response){ //if result found
      var audioSrc = response.tracks.items[0].preview_url; //takes the first song's url from spotify search result
      var audioId = track.replace(/\s+/g, ''); // remove all the spaces from the search input to create a unique Id
      track = track.firstLetterCapitalizer(); // capitalizing the first letter if the user didn't enter correctly
      // adds the audio tag, id, and src to a div with Id = 'song'. Every new song search will update the div with a new audio tag of that search song.
      $("#song").append("<audio src='" + audioSrc + "'" +
        " id='" + audioId + "'" + "></audio>");

      var trk = document.getElementById(audioId); //getting the last audio tag that was added to the div with id = 'song'
      myplayList.push(trk); // adding that song to myplayList

      // adds the li tag, audio tag, id, and src to unorderedList(ul). Every new song search will update the unorderedList(ul) with a new ListItem(li) of that search song.
      $("ul").append("<li onclick=\"listPlay(" + songIndex + ")\"" + "><audio src='" + audioSrc + "'" + "></audio>" + track +"</li>");

      songIndex = songIndex +1;// new song index

    }
  }) //end of ajax


}); //end of immediate function which acts when search button being clicked.


var myJukeBox = new JukeBox(myplayList); // new custome JukeBox

//function to change the song when 'li' tag being clicked
function listPlay(songIndex){
  i = 0;
  while(i < myplayList.length){ // loop to check which song is on and turns it off.
      myplayList[i].pause();
      myplayList[i].currentTime = 0;
      i++;
  }

  myplayList[songIndex].play(); //playing the clicked song
  currentTrack = songIndex; // changing the current track to that song, so that the user can play next and previous track.

}//listPlay()


//adding action listener to the button

$("#play").click(function() {
  myJukeBox.play();
});

$("#pause").click(function() {
  myJukeBox.pause();
});

$("#stop").click(function() {
  myJukeBox.stop();
});


$("#next").click(function() {
  myJukeBox.playNext();
});


$("#previous").click(function() {
  myJukeBox.playPrevious();
});

//end of adding action listener to the button.

//beginning of the JukeBox Constructor

function JukeBox(playList){

  this.play = function() {
    playList[currentTrack].play();
  }//play()

  this.pause = function(){
    playList[currentTrack].pause();
  }//pause()

  this.stop = function () {
    playList[currentTrack].pause();
    playList[currentTrack].currentTime = 0;
  }//stop()

  this.playNext = function(){
    playList[currentTrack].pause();
    playList[currentTrack].currentTime = 0;
    currentTrack = (currentTrack+1)%(playList.length);
    playList[currentTrack].play();
  }//playNext()

  this.playPrevious = function(){
    playList[currentTrack].pause();
    playList[currentTrack].currentTime = 0;
    if(currentTrack > 0){
      currentTrack = currentTrack - 1;
      playList[currentTrack].play();
    }
    else{
      currentTrack = playList.length - 1;
      playList[currentTrack].play();
    }
  }//playPrevious()


}//JukeBox

//end of the JukeBox Constructor
