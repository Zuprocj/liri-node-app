require("dotenv").config();

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

function userCommand(userInput, userQuery) {
    switch (userInput) {
        case "concert-this":
            concertThis();
            break;
        case "spotify-this":
            spotifyThisSong();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-this":
            doThis(userQuery);
            break;
        default:
            console.log("I don't understand");
            break;
    }
}

function spotifyThisSong() {
    console.log(`\n - - - - -\n\nSEARCHING FOR..."${userQuery}"`);

    // IF USER QUERY NOT FOUND, PASS VALUE OF "ACE OF BASE" 
    if (!userQuery) {
        userQuery = "the sign ace of base"
    };

    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if ( err ) {
            console.log('Error occured: ' + err);
            return;
        }
      
      let spotifyArr = data.tracks.items;

      for (i = 0; i < spotifyArr.length; i++) {
          console.log(`\nIs this is what you are looking for
          ...\n\nArtist: ${data.tracks.items[i].album.artists[0].name} \nSong: ${data.tracks.items[i].name}\nAlbum: ${data.tracks.items[i].album.name}\nSpotify link: ${data.tracks.items[i].external_urls.spotify}\n\n - - - - -`)
      };
  });
}