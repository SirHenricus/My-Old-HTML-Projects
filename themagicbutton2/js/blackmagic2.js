// ----Helpful Functions

function sleep(milliseconds) {
    let timeStart = new Date().getTime();
    while (true) {
      let elapsedTime = new Date().getTime() - timeStart;
      if (elapsedTime > milliseconds) {
        break;
      }
    }
  }

function randomnumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function playsound(asset,volume) {

  var snd = new Audio(asset);
  snd.volume = volume;
  snd.loop = false;

  snd.play();

}

function clicksound() {

 playsound("https://invertedfate.com/sounds/key_click.mp3",0.4);

}

// ----Music

var music = new Audio('https://chezzkidsarchive.neocities.org/smiling.mp3');
music.volume = 0.4;
music.loop = true;

function changemusic(song) {

 music.pause();

 music = new Audio(song);

 music.volume = 0.4;
 music.loop = true;

 music.play();

 console.info("Now Playing: " + song)

}

// ----Asset URLs

var mus_farmloop = "assets/record_chezzkids_harryfarm_farmhubloop.wav"

var mus_quietrebel = "assets/caretaker_quietinternalrebel.mp3"

var mus_pumbanjo1 = "assets/pumkinbanjoloop_uncut.wav"

var mus_dabadee = "https://web.archive.org/web/20000816113054if_/http://www.aliendance.com:80/dabadee.wav"

var mus_fallequinox = "assets/caretaker_autumnalequinox.mp3"

var mus_barometer = "http://firstsounds.org/sounds/volta/287686_Barometer.wav"

// ----White Magic

function kong13popup() {
 var kong = window.open("","kong13 image","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizeable=0,width=640,height=510")

 with (kong.document) {
  writeln("<title> garfield_kong13.bmp - Image View </title>")
  writeln("<img src='assets/garfieldkong13.bmp' alt='kong13'>")
 }
}

// ----Black Magic

function blackmagic() {

 clicksound()

 // randomnumber(1, 8)

 var chance = randomnumber(1, 8)

 console.log("Your Magic Number Is: " + chance)

 if (chance == 1) {

  document.writeln("<title> Podcast Archives </title>")

  document.writeln(`<style>
  body {
   background-image: url("assets/chezzkids_trueverandapodcastbg.png");
   background-repeat: no-repeat;
   background-attachment: fixed;
   background-position: center; 
  }
  </style>
  `)
  
  document.writeln("<br>")

  document.writeln("<center>")
  
  document.writeln("<h1> - KENW-1090 Radio Station Archives - </h1>")

  document.writeln("<br>")

  document.writeln("<br>")

  document.writeln("<br>")

  document.write("<iframe width='566' height='528' src='https://www.youtube.com/embed/_WZYaOej0fU' title='​' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>")

 document.write("<h4> 'Interview With WNCPWQ ANKBZVMBE' 8/10/07 </h4>")

 document.writeln("</center>")

 document.writeln("<br>")

 document.writeln("<br>")

 document.writeln("<br>")

 console.info("pretty good memory don't you think? :)")

 } else if (chance == 2) {

  console.info("Archive Date: June 8, 2002")

  changemusic(mus_farmloop);

  document.writeln("<link rel='stylesheet' href='css/retroweblook.css'>")

  document.writeln(`
  <style>
   body {
    background-image: url("https://web.archive.org/web/19961227193757im_/http://www.garfield.com/images/tile.gif");
   }
  </style>
  `)

  document.writeln("<title> Garfield Corner - Garfthreads </title>")

  document.writeln("<br>")

  document.writeln("<center>")

  document.writeln("<h1> Garfield Corner - Latest Forum Posts </h1>")

  document.writeln("<img src='http://web.archive.org/web/19980614014006im_/http://www.garfield.com/images/sign1.gif' height='111' alt='turn back now'>")

  for (let i = 0; i < 5; i++) { 
   document.writeln("<br>")
  }

  document.writeln("</center>")

  document.writeln("<h2><em> Have you ever wondered how the economy works in the Garfield Universe? </em></h2>")
  document.writeln("<h3> I've always wondered how money works in the Garfield world. Do they have a stock market? </h3>")
  document.writeln("<h5> dr4matictr33 - June 8, 2002 3:13 PM </h5>")

  for (let i = 0; i < 2; i++) { 
   document.writeln("<br>")
  }

  document.writeln("<h2><em> What happened to Layman? </em></h2>")
  document.writeln("<h3> I've just been wondering this for the longest time. Is Layman still alive? </h3>")
  document.writeln("<h5> ironizegramercy419 - June 8, 2002 2:00 PM </h5>")

  for (let i = 0; i < 2; i++) { 
   document.writeln("<br>")
  }

  document.writeln("<h2><em> Found This Crazy King Kong Garfield Background!!!1 </em></h2>")
  document.writeln("<h3> I found weird garfield computer background? Thoughts? :D </h3>")
  document.writeln("<a href='javascript:kong13popup();'>See Here!</a>")
  document.writeln("<h5> gammadelta - June 8, 2002 1:48 PM </h5>")

 } else if (chance == 3) {

  changemusic(mus_quietrebel)

  document.writeln(`
  <style>
  
  body {
   background: grey;
  }

  h1,h2,p {
   color: white;
  }

  #doom {
   border: solid;
   border-width: thick;
   border-color: white;
   fill: white;
  }

 </style>
 `)

 document.writeln("<title> 90 seconds to midnight! </title>")

 document.write("<center>")

 for (let i = 0; i < 10; i++) { 
   document.writeln("<br>")
  }

 document.writeln("<img id='doom' src='https://upload.wikimedia.org/wikipedia/commons/f/f8/Doomsday_clock_%281.5_minutes%29.svg' height='300' alt='doomsday clock'>")

 document.writeln("<br>")

 document.write("<h1> 90 seconds to midnight... </h1>")

 document.write("</center>")

 } else if (chance == 4) {

  if (randomnumber(0,2) == 1) {
   changemusic(mus_pumbanjo1)
  } else {
   changemusic(mus_dabadee)
  }

  document.writeln("<title> Felix Boogie! </title>")

  document.writeln("<center>")

  document.writeln("<br>")

  document.writeln("<h1> Look at Felix Go! </h1>")

  document.writeln("<br>")

  document.writeln("<img src='https://www.cinemacats.com/wp-content/uploads/gifs/felixgetsrevenge.gif' height='400' alt='felix boogie down'>")

  document.writeln("</center>")

 } else if (chance == 5) {

 changemusic("https://invertedfate.com/character-pages/sans/song.mp3")

 document.writeln("<link rel='stylesheet' href='css/boiledtrunkfont.css'>")

 document.writeln("<title> BOILED TRUNK </title>")

 document.write(`
 <style>
   body {
    background-image: url("https://chezzkidsarchive.neocities.org/Chezzy.png");
   }
 </style>
 `)

 document.writeln("<center>")

 document.writeln("<br>")

 document.writeln("<h1> WELCOME TO THE BOILED TRUNK </h1>")

 document.writeln("<p> BOILED TRUNK is a font made by Kadable for their Pygame Project called T.R.U.N.K </p>")

 document.writeln("</center>")

 } else if (chance == 6) {

 changemusic(mus_fallequinox)

 document.write("<br>")

 document.write("<style> body { background: navajowhite; } </style>")

 document.write("<title> Menagerie Of Felines!! </title>")

 document.write("<br>")

 document.write("<center>")

 document.write("<iframe width='708' height='515' src='mbsub/mbsub_catmenagerie.html'></iframe>")

 document.write("</center>")

 document.write("<br>")

 } else if (chance == 7) {
  changemusic(mus_barometer);

  document.writeln("<title> BAROMETER BAROMETER BAROMETER </title>")

  document.writeln("<style> body { background: black; } h1 { color: white; } </style>")

  document.writeln("<center>")

  document.writeln("<br>")

  document.writeln("<img src='https://ids.si.edu/ids/deliveryService?id=NMAH-RWS2011-03632&max=1000' height='400' alt='barometer'>")

  document.writeln("<br>")

  for (let i = 0; i < 38; i++) {
   document.writeln("<h1> BAROMETER </h1>")
  }

  document.writeln("</center>")

 }

}
