require("dotenv").congig();

let request = require("request");

const moment = require('moment');

const fs = require("fs");

var keys = require("./keys.js");

const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

let omdb = (keys.omdb);
let bandsintown = (keys.bandsintown);

let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");

var getArtistsNames = function(artist) {
    return artist.name;
}

var getMeSpotify = function(songName) {

    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if ( err ) {
            console.log('Error occured: ' + err);
            return;
        }
    
    var songs = data.tracks.items;
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