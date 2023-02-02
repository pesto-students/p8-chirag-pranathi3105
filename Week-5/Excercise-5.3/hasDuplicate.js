//has duplicate checking

const hasDuplicate = myArray=>new Set(myArray).size !== myArray.length;
  

  console.log(hasDuplicate([1,5,-1,4]))