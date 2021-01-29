const fs = require('fs')

var foreignwithpronunciations = fs.readdirSync('./Swedish') //Change this

for(var i = 0; i < foreignwithpronunciations.length; i++){
    foreignwithpronunciations[i] = foreignwithpronunciations[i].substring(17, foreignwithpronunciations[i].length-4)
}

fs.writeFileSync("sv-with-pronunciations.txt", foreignwithpronunciations) //Change this
