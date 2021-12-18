function palindrome(str) {
  str = str.replace( /[\W_]/g, '').toLowerCase();
  let reverseString = str.split("").reverse().join("");
  if(str === reverseString)
   return true;
  return false;
}

palindrome("eye");