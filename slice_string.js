function truncateString(str, num) {
  // Clear out that junk in your trunk
  //truncateString
  var new_str="";
  if(num>=str.length){
      new_str=str;
  }else if(num>3){
     new_str = str.slice(0,num-3);
      new_str+="...";
  } else{
     new_str = str.slice(0,num);
     new_str+="...";
  }
 return new_str;
}

console.log(truncateString("A-", 1));