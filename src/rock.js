  function rockPaperPermutation (roundCount) {
  // Write your code here, and
  // return your final answer.
  var results = [r,p,s];

  for (var i = 2; i <= roundCount; i++) {
    var temp = [];
    for (var j = 0; j < results.length; j++) {
      temp.push(results[j]+'r')
      temp.push(results[j]+'p')
      temp.push(results[j]+'s')

    }
  results = temp.slice();
  console.log(temp)
  console.log(results)
  }


  return results;
}

console.log(rockPaperPermutation(2))
