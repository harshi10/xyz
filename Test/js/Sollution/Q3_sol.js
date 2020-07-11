
function QuestionsMarks(str) {
  let numPlaces = [];
  //presumption of false, until flag is turned true
  let flag = false;

    //get an array of places in string holding integers
  for (let i = 0, len = str.length; i < len; i++) {
    if (/\d/.test(str[i])) {
      numPlaces.push(i);
    }
  }

  let numCount = numPlaces.length;

  for (let i = 0; i < numCount - 1; i++) {
    if (parseInt(str[numPlaces[i]], 10) + parseInt(str[numPlaces[i + 1]], 10) === 10) {
      flag = true;
      let strSeg = str.slice(numPlaces[i], numPlaces[i + 1]);

      strSeg = strSeg.replace(/[^\?]/g, '');
      if (strSeg !== '???') {
        return false;
      }
    }
  }
  return flag;
}
   
// keep this function call here 
QuestionsMarks(readline());