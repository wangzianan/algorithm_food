function repeatStringNumTimes(str, num) {
  // repeat a string
  if(num<=0){
      return "";
  }else{
      var str_arr = [];
      for(var i=0; i<num; i++){
          str_arr.push(str);
      }
      return str_arr.join("");
  }

}

console.log(repeatStringNumTimes("abc", 3));