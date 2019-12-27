const repeatString = function(str1, num) {
  str2=''
  for (let i=0;i<num;i++) {
    str2+=str1;
  }
  return str2;
}

module.exports = repeatString
