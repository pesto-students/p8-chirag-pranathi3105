const findPair = (arr, size, n) => {
    // Step-1 Sort the array
    arr.sort((a, b) => a - b);
 
    // Initialize positions of two elements
    let l = 0;
    let r = 1;
 
    // take absolute value of difference
    // this does not affect the pair as A-B=diff is same as
    // B-A= -diff
    n = Math.abs(n);
 
    // Search for a pair
 
    // These loop running conditions are sufficient
    while (l <= r && r < size) {
        let diff = arr[r] - arr[l];
        if (diff === n
            && l !== r) // we need distinct elements in pair
                        // so l!==r
        {
            return 1;
        }
        else if (diff > n) // try to reduce the diff
            l++;
        else // Note if l==r then r will be advanced thus no
             // pair will be missed
            r++;
    }
    return 0;
}
 
// Driver program to test above function
const main = () => {
    let arr = [5, 10, 3, 2, 50, 80];
    let size = arr.length;
    let n = 78;
    console.log(findPair(arr, size, n));
}
 
main();