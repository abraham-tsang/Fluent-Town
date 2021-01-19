const fs = require('fs');

function removeNonsense(file){
  var foreign = fs.readFileSync(file, 'utf8')
  var foreignWords = foreign.split('\r\n')
  for(var i = 0; i < foreignWords.length; i++){
    for(var j = 0; j < foreignWords[i].length; j++){
      if(foreignWords[i][j] == ' ' || foreignWords[i][j] == '-' || foreignWords[i][j] == '（'){
        foreignWords[i] = foreignWords[i].slice(0, j-1)
        break
      }
    }
  }
  return foreignWords
}

foreignWords = removeNonsense('Chinese\ words.txt') // Change this
fs.writeFileSync('ch.txt', foreignWords) //Change this
