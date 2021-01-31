const fs = require('fs')

var foreignwithpronunciations = fs.readdirSync('./Swedish') //Change this

for(var i = 0; i < foreignwithpronunciations.length; i++){
    foreignwithpronunciations[i] = foreignwithpronunciations[i].substring(17, foreignwithpronunciations[i].length-4)

    foreignwithpronunciations[i] = foreignwithpronunciations[i].replace(/å/g, 'a')
    foreignwithpronunciations[i] = foreignwithpronunciations[i].replace(/ä/g, 'a')
    foreignwithpronunciations[i] = foreignwithpronunciations[i].replace(/ö/g, 'o')
    foreignwithpronunciations[i] = foreignwithpronunciations[i].replace(/é/g, 'e')
}

console.log(foreignwithpronunciations)
