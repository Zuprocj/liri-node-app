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
5. **.env** User must create their own .env file to house api keys and to keep them private on their own computers.

## Functions

**concert-this**
_<command, artist name>_

Function takes the userInput (command) and the userQuery (artist), and returns the next concert time and date for that artist, as well as location and city. 
![image of concert-this](https://user-images.githubusercontent.com/50551420/66095636-1a6b6880-e54d-11e9-9fab-976e1acd3106.png)

**spotify-this**
_<command, song name>_

Function takes the userInput (command) and the userQuery (song name), and returns the artist, full track name, a preview link and the album.
![image of spotify-this}](https://user-images.githubusercontent.com/50551420/66095771-a2ea0900-e54d-11e9-8cc5-f5b9fe14d3a9.png)

**movie-this**
_<command, movie name>_

Function takes the userInput( command) and the userQuery (movie name), and returns title, cast, release date, ratings, country of origin, original languages, and synopsis.
![image of movie-this}](https://user-images.githubusercontent.com/50551420/66095763-9a91ce00-e54d-11e9-9a68-a70ba83bed34.png)

**do-this**
_<command>_

Function that will randomly select from the random.txt commands to run. 
![image of do-this}](https://user-images.githubusercontent.com/50551420/66095756-92399300-e54d-11e9-8735-08d6b83377fd.png)

## Technologies used 
 VsCode
 Node.js
 Axios
 Node-Spotify-API
 OMDB API
 Bands In Town API
 Moment
 DotEnv
