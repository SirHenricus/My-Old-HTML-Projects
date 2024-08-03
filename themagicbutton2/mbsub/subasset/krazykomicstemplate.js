var krazykomics = []

var comicbook = document.getElementById("comicmain");

var comicindex = 0

function comicupdate() {
 if (comicindex > krazykomics.length - 1) { comicindex = krazykomics.length - 1 }

 if (comicindex > krazykomics.length - 1) { console.log("limit reach") }

 if (comicindex < 0) { comicindex = 0 }

 document.getElementById("comicmain").src = krazykomics[comicindex];
 
}


function comicmove(dir) {
 if (dir == "+") { comicindex = comicindex + 1 }
 if (dir == "-") { comicindex = comicindex - 1 }

 comicupdate();
}

if (krazykomics == []) {
 console.warn("You did not set the contents of the 'krazykomics' list. Make sure to assign the contents before the 'theatermain' object in your page")
}

// Make sure to put a 'comicupdate' function call at the end of the page
