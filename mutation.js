function mutation(arr) {
    //return true if the first element contains all the letters of the second element,ignoring case.
    var str_first = arr[0].toLowerCase();
    var str_second = arr[1].toLowerCase();
    for(var i=0; i<str_second.length; i++){
        if(str_first.indexOf(str_second[i])==-1){
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]));