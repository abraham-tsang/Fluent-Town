const fs = require('fs');

file = "./Chinese/ch.txt" // Change this
englishFile = "./English/en.txt"

var foreign = fs.readFileSync(file, 'utf8')
var foreignWords = foreign.split(',')
var english = fs.readFileSync(englishFile, 'utf8')
var englishWords = english.split(',')

var foreignCombinedWords = []
for(var i = 0; i < foreignWords.length; i++){
    foreignCombinedWords.push(foreignWords[i] + " " + englishWords[i])
}

fs.writeFileSync("./Chinese/ch-en.txt", foreignCombinedWords) //Change this
