const fs = require('fs')

var foreignwithpronunciations = fs.readdirSync('./Swedish') //Change this

for(var i = 0; i < foreignwithpronunciations.length; i++){
    foreignwithpronunciations[i] = foreignwithpronunciations[i].substring(17, foreignwithpronunciations[i].length-4)
}

var withenglish = fs.readFileSync('./sv-en.txt', 'utf8') //Change this
withenglish = withenglish.toLowerCase()
withenglish = withenglish.split(',')
withenglish = withenglish.sort(function(a, b) { if(a < b) {return -1} if(a > b) {return 1} return 0 })

var foreignwithpronunciationsandenglish = []
var fwp_i = 0;
while(fwp_i < foreignwithpronunciations.length){
    for(var i = 0; i < withenglish.length; i++){
	if(withenglish[i] !== undefined && withenglish[i].split(' ')[0] === foreignwithpronunciations[fwp_i]){
            foreignwithpronunciationsandenglish.push(withenglish[i])
	    break
        }
    }
    fwp_i++;
}

for(var i = 0; i < foreignwithpronunciationsandenglish.length; i++){
    foreignwithpronunciationsandenglish[i] = foreignwithpronunciationsandenglish[i].split(' ')
    foreignwithpronunciationsandenglish[i] = foreignwithpronunciationsandenglish[i].join('\\n')
    foreignwithpronunciationsandenglish[i] = '\"' + foreignwithpronunciationsandenglish[i] + '\"'
}
/*
for(var i = 0; i < foreignwithpronunciationsandenglish.length; i++){
    var temp = []
    
}
*/
//console.log(withenglish)
//console.log(foreignwithpronunciations)
console.log(foreignwithpronunciationsandenglish)
//fs.writeFileSync("sv-with-pronunciations-and-english.txt", foreignwithpronunciationsandenglish) //Change this
