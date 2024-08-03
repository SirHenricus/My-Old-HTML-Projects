// Pop-up Window Function

function windowpop(url) {
window.open(url,"newwindow","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizeable=0,width=300,height=300")
}

// Personalized Pop-Up Function

function personalpop() {

var poppy = prompt("Input URL");

window.open(poppy,"newwindow","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizeable=0,width=999,height=999")
}

// Pop-up Window Function (varied height) 

function windowpop2(url,wide,tall) {
window.open(url,"newwindow","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizeable=0,width=wide,height=tall")
}

// Sleep Function

function sleep(milliseconds) {
    let timeStart = new Date().getTime();
    while (true) {
      let elapsedTime = new Date().getTime() - timeStart;
      if (elapsedTime > milliseconds) {
        break;
      }
    }
  }

// Play Sound Effect

function playsound(asset,volume) {

  var snd = new Audio(asset);
  snd.volume = volume;
  snd.loop = false;

  snd.play();

}

// Page Crasher

function loopcrash() {

  while (2 + 2 == 4) { }

}

// Random Number

function randomnumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Change Image SRC Of Image Tag (Broken)

function changeimage(image,elid) {
 var target = document.getElementById(elid).src;

 target = image

}

// Alphabet Character Sets

var alphiechars1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var alphiechars2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// Infinity

infinitynum = 1337 / 0

// Play Click Sound

function clicksound() {

 playsound("https://invertedfate.com/sounds/key_click.mp3",0.4);

}

// Greek Chars

var greekletters1 = ["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω"]

var greekletters2 = ["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ","τ","υ","φ","χ","ψ","ω"]

// Lorem Ipsum Text

var loremipsumdolor = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
