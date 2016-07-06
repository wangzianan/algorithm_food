function rot13(str) { // LBH QVQ VG!
  //cassar_cipher
  var str_arr = [];
  var new_str = "";
  for(var i=0; i<str.length; i++){
      var num = str.charCodeAt(i);
      var char = '';
      if(num>=65&&num<=77){
          char = String.fromCharCode(num+13);
      }else if(num>77&&num<=90){
          char = String.fromCharCode(num-13);
      } else{
          char = str[i];
      }
      str_arr.push(char);
  }
  new_str = str_arr.join("");
  return new_str;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));