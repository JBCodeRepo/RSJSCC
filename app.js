//********************************************************************************************************
//GLOBAL VARIABLES
//********************************************************************************************************
const convertButton = document.querySelector("#btn-convert");
const originalText = document.querySelector("#ta-plain-text");
const modifiedText = document.querySelector("#ta-cipher-text");
const rot = document.querySelector("#tb-rot");
const encryptMode = document.querySelector("#rb-mode-encrypt");
const decryptMode = document.querySelector("#rb-mode-decrypt");

//********************************************************************************************************
//FUNCTIONS
//********************************************************************************************************

//Name: determineNumber
//Descrption: Takes in a letter and determines what number it is
function determineNumber(letter){
    switch(letter.toLowerCase()){
        case "a":
            return 0
        case "b":
            return 1
        case "c":
            return 2
        case "d":
            return 3
        case "e":
            return 4
        case "f":
            return 5
        case "g":
            return 6
        case "h":
            return 7
        case "i":
            return 8
        case "j":
            return 9
        case "k":
            return 10
        case "l":
            return 11
        case "m":
            return 12
        case "n":
            return 13
        case "o":
            return 14
        case "p":
            return 15
        case "q":
            return 16
        case "r":
            return 17
        case "s":
            return 18
        case "t":
            return 19
        case "u":
            return 20
        case "v":
            return 21
        case "w":
            return 22
        case "x":
            return 23
        case "y":
            return 24
        case "z":
            return 25
        case "`":
            return 26
        case "~":
            return 27
        case "!":
            return 28
        case "@":
            return 29
        case "#":
            return 30
        case "$":
            return 31
        case "%":
            return 32
        case "^":
            return 33
        case "&":
            return 34
        case "*":
            return 35
        case "(":
            return 36
        case ")":
            return 37
        case "-":
            return 38
        case "_":
            return 39
        case "+":
            return 40
        case "=":
            return 41
        case "[":
            return 42
        case "]":
            return 43
        case "{":
            return 44
        case "}":
            return 45
        case "\\":
            return 46
        case "\/":
            return 47
        case "|":
            return 48
        case ";":
            return 49
        case ":":
            return 50
        case "'":
            return 51
        case '"':
            return 52
        case ",":
            return 53
        case ".":
            return 54
        case "?":
            return 55
        case "<":
            return 56
        case ">":
            return 57
        case "1":
            return 58
        case "2":
            return 59
        case "3":
            return 60
        case "4":
            return 61
        case "5":
            return 62
        case "6":
            return 63
        case "7":
            return 64
        case "8":
            return 65
        case "9":
            return 66
        case "0":
            return 67 
        

    }
}

//Name: determineLetter
//Descrption: Takes in a number and determines what letter it is
function determineLetter(input){
    switch(input){
        case 0:
            return "a"
        case 1:
            return "b"
        case 2:
            return "c"
        case 3:
            return "d"
        case 4:
            return "e"
        case 5:
            return "f"
        case 6:
            return "g"
        case 7:
            return "h"
        case 8:
            return "i"
        case 9:
            return "j"
        case 10:
            return "k"
        case 11:
            return "l"
        case 12:
            return "m"
        case 13:
            return "n"
        case 14:
            return "o"
        case 15:
            return "p"
        case 16:
            return "q"
        case 17:
            return "r"
        case 18:
            return "s"
        case 19:
            return "t"
        case 20:
            return "u"
        case 21:
            return "v"
        case 22:
            return "w"
        case 23:
            return "x"
        case 24:
            return "y"
        case 25:
            return "z"
        case 26:
            return"`"
        case 27:
            return "~"
        case 28:
            return "!"
        case 29:
            return "@"
        case 30:
            return "#"
        case 31:
            return "$"
        case 32:
            return "%"
        case 33:
            return "^"
        case 34:
            return "&"
        case 35:
            return "*"
        case 36:
            return "("
        case 37:
            return ")"
        case 38:
            return "-"
        case 39:
            return "_"
        case 40:
            return "+"
        case 41:
            return "="
        case 42:
            return "["
        case 43:
            return "]"
        case 44:
            return "{"
        case 45:
            return "}"
        case 46:
            return "\\"
        case 47:
            return "\/"
        case 48:
            return "|"
        case 49:
            return ";"
        case 50:
            return ":"
        case 51:
            return "'"
        case 52:
            return '"'
        case 53:
            return ","
        case 54:
            return "."
        case 55:
            return "?"
        case 56:
            return "<"
        case 57:
            return ">"
        case 58:
            return "1"
        case 59:
            return "2"
        case 60:
            return "3"
        case 61:
            return "4"
        case 62:
            return "5"
        case 63:
            return "6"
        case 64:
            return "7"
        case 65:
            return "8"
        case 66:
            return "9"
        case 67:
            return "0"
    }
}

//Name: encryptLetter
//Descrption: changes a letter, based on rot
function encryptLetter(input){

    let plainNumber = Number(determineNumber(input));
 
    let rotNumber = Number(rot.value);

    let cipherNumber = rotNumber + plainNumber;

    //Keep CipherNumber within bounds for letter input
     if(cipherNumber > 67){
         cipherNumber -= 68;
     }
     
    return determineLetter(cipherNumber);
}

//Name: encryptWord
//Descrption: encrypts each letter in the word
function encryptWord(theWord){

    //Split word into array
    let originalWordArray = theWord.split("");

    //Create empty array to fill with encrypted letters
    let encryptedWordArray = [];

    //Encrypt each letter and populate the empty array
    for(let i=0; i < originalWordArray.length; i++){
        encryptedWordArray.push(encryptLetter(originalWordArray[i]));
    }

    //Combine encrypted array into string
    return encryptedWordArray.join("");
}

//Name: encryptAllWords
//Descrption: encrypts all of the words in a textarea
function encryptAllWords(theText){
    
    //Create an array with all the words in it
    let originalTextArray = theText.split(" ");

    //Create empty array to fill with encrypted words
    let encryptedTextArray = [];

    //Encrypt each word
    for(let i=0; i < originalTextArray.length; i++){
        encryptedTextArray.push(encryptWord(originalTextArray[i]));
    }

    //Combine encrypted array into string
    return encryptedTextArray.join(" ");
}

//Name: rotValidation
//Descrption: Checks to make sure rot is a number
function rotValidation(input){

    if(input == "" || input == " "){
        alert("Please enter a number for the rot.")
    } else {
        let rotValue = Number(input)

        if(Number.isNaN(rotValue)){     
            alert("Please input a number for the rot.");
            return false;
        } else {
                return true;
            }
        }
    }

//Name: decryptLetter
//Descrption: changes a letter back, based on rot
function decryptLetter(input){

    let cipherNumber = Number(determineNumber(input));

    let rotNumber = Number(rot.value);

    let plainNumber = cipherNumber - rotNumber;

    //Keep CipherNumber within bounds for letter input
    if(plainNumber < 0){
        plainNumber = 67;
    }

    return determineLetter(plainNumber);
}

//Name: decryptWord
//Descrption: decrypts each letter in the word
function decryptWord(theWord){

    //Split word into array
    let originalWordArray = theWord.split("");

    //Create empty array to fill with decrypted letters
    let decryptedWordArray = [];

    //Decrypt each letter and populate the empty array
    for(let i=0; i < originalWordArray.length; i++){
        decryptedWordArray.push(decryptLetter(originalWordArray[i]));
    }

    //Combine decrypted array into string
    return decryptedWordArray.join("");
}

//Name: decryptAllWords
//Descrption: decrypts all of the words in a textarea
function decryptAllWords(theText){
    
    //Create an array with all the words in it
    let originalTextArray = theText.split(" ");

    //Create empty array to fill with decrypted words
    let decryptedTextArray = [];

    //Decrypt each word
    for(let i=0; i < originalTextArray.length; i++){
        decryptedTextArray.push(decryptWord(originalTextArray[i]));
    }

    //Combine decrypted array into string
    return decryptedTextArray.join(" ");
}

//********************************************************************************************************
//IMPLIMENTATION
//********************************************************************************************************

convertButton.addEventListener("click", function(){

    //Validate rot
    if(rotValidation(rot.value)){
        //Encrypt or decrypt, based on mode
        if(encryptMode.checked == true){
            //Encrypt
            modifiedText.value = encryptAllWords(originalText.value);
        } else {
            //Decrypt
            modifiedText.value = decryptAllWords(originalText.value);
        }

    }
    
}); 







