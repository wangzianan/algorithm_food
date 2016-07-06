function destroyer(arr) {
  // Remove all the values
  //remove all the elements from initial array that are the same as the arguments
  var arr_arguments = Array.prototype.slice.call(arguments, 1);
  var new_arr = arr.filter(function (value) {
      for(var i=0; i<arr_arguments.length; i++){
          if(value==arr_arguments[i]){
              return false;
          }
      }
      return true;
  });
  return new_arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));