require("dotenv").congig();

var keys = require("./keys.js");
var spotify = new spotify(keys.spotify);

var getArtistsNames = function(artist) {
    return artist.name;
}
var getMeSpotify = function(songName) {

    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if ( err ) {
            console.log('Error occured: ' + err);
            return;
        }
    
    var songs = data.tracks.tems;
    for(var i=0, i<songs.length; i++) {
        console.log(i);
        console.log('artist(s): ' + songs[i].artists.map(
            getArtistsNames));
        console.log('song name: ' + songs[i].name);
        console.log('preview song: ' + songs[i].preview.url);
        console.log('album: ' + songs[i].album.name);
        console.log ('------------------------------------');
    }
    });
}