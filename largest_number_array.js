function largestOfFour(arr) {
  var new_arr=[]; 
  for(var i=0; i<arr.length; i++){
      var temp = arr[i][0];
      for(var j=0;j<arr[i].length; j++){
          if(arr[i][j]>temp){
              temp = arr[i][j];
              
          }
      }
      new_arr.push(temp);
  }  
  return new_arr;
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));