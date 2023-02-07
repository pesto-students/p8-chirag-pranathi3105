
// javascript implementation of the approach
 
// Utility function to print the contents of an array
function printArr( arr, n)
{
    let newArr = [];
    for (let i = 0; i < n; i++)
        newArr.push(arr[i])
    return newArr;
}
 
// Function to sort the array of 0s, 1s and 2s
function sortArr( arr,  n)
{
    let i, cnt0 = 0, cnt1 = 0, cnt2 = 0;
 
    // Count the number of 0s, 1s and 2s in the array
    for (i = 0; i < n; i++) {
        switch (arr[i]) {
        case 0:
            cnt0++;
            break;
        case 1:
            cnt1++;
            break;
        case 2:
            cnt2++;
            break;
        }
    }
 
    // Update the array
    i = 0;
 
    // Store all the 0s in the beginning
    while (cnt0 > 0) {
        arr[i++] = 0;
        cnt0--;
    }
 
    // Then all the 1s
    while (cnt1 > 0) {
        arr[i++] = 1;
        cnt1--;
    }
 
    // Finally all the 2s
    while (cnt2 > 0) {
        arr[i++] = 2;
        cnt2--;
    }
 
    // Print the sorted array
   return printArr(arr, n);
}
 
    // Driver program to test above function
 
    let arr = [0, 2, 1, 2, 0];
    let n = arr.length;
     
    // Function calling
    console.log(sortArr(arr, n));