function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var new_arr = arr.filter(function(value){
      console.log(new Boolean(value));
      return new Boolean(value)==true;
  });
  return new_arr;
}

console.log(bouncer([7, "ate", "", false, 9]));