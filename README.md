# Liri-node-app

 LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

 | Command | Function |
 | --- | --- |
 | concert-this | uses the bandsintown API to take a band name from the user and returns that bands next concert |
 | spotify-this | uses the spotify API to take a song name from the user and returns the artist, song name, spotify-link and album |
 | movie-this | uses the OMDB API to take a movie title and returns the name, casr, release year, IMDB and Rotten Tomatoes rating, country of origin, language, and plot |
 | do-what-it-says | uses the bulit in readFile method to access data from a prefilled  .txt file and return its information as a command/search query |

**Before you begin, make sure you have these node packages installed**

1. **Dotenv** Dotenv is a modile that loads enviroment variables from a .env file into process.env
_'npm install dotenv'_
2. **Request** Request is desgined to make http calls 
_'npm install request'_
3. **Moment** Javascipt library fpr parsing, validating, manipulating, and formatting dates.
_'npm install moment'_
4. **FS** a built in node package
_'npm i request'_

## Functions

**concert-this**
_<command, artist name>_
Function takes the userInput (command) and the userQuery (artist), and returns the next concert time and date for that artist, as well as location and city.

**spotify-this**
_<command, song name>_
Function takes the userInput (command) and the userQuery (song name), and returns the artist, full track name, a preview link and the album.

**movie-this**
_<command, movie name>_
Function takes the userInput( command) and the userQuery (movie name), and returns title, cast, release date, ratings, country of origin, original languages, and synopsis.

**do-this**
_<command>_
Function that will randomly select from the random.txt commands to run. 
