function chunkArrayInGroups(arr, size) {
  // Break it up.
  var new_arr=[];
  for(var i=0; i<arr.length; i+=size){
      var arr_copy = arr.slice();
      var temp_arr=[];
      if((i+size)<arr.length){
          temp_arr = arr_copy.splice(i, size);
      } else{
          temp_arr = arr_copy.splice(i);
      }
      
      new_arr.push(temp_arr);
  }
  return new_arr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
