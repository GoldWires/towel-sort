
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix){
    var masiv = [];
    var n = 0;
    for(var i = 0; i < matrix.length; i++){
      if (i % 2 != 0) {
        for(var j = matrix[i].length - 1; j >= 0; j--){
        masiv[n] = matrix[i][j]; 
        n++;
        }
      }
      else{
        for(var j = 0; j < matrix[i].length; j++){
        masiv[n] = matrix[i][j]; 
        n++;
        }
      }
    }
    return masiv;
  }
  else return [];
}
