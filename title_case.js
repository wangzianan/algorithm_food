function titleCase(str) {
  var arr = str.split(" ");
  for(var i=0; i<arr.length; i++){
    arr[i]=arr[i].toLowerCase();
    var arr_temp=arr[i].split("");
    arr_temp[0]=arr_temp[0].toUpperCase();
    arr[i] = arr_temp.join("");
  }
  str = arr.join(" ");
  return str;
}

console.log(titleCase("sHoRt AnD sToUt"));