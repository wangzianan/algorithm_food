function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  var new_arr = arr.sort(function(a,b){
      return a-b;
  });
  for(var i=0; i<new_arr.length; i++){
      if(new_arr[i]==num){
          return i;
      }
  }
}

console.log(getIndexToIns([40, 60], 50));