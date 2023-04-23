// javascript implementation of the approach
  
// Utility function to print the contents of an array
function printArr( arr, n)
{
    const sortArr = [];
    for (let i = 0; i < n; i++)
       sortArr.push(arr[i]);
       
    console.log("Sorted Array: ",sortArr);   
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
    printArr(arr, n);
}
  
    // Driver program to test above function
  
    let arr = [0, 1, 1, 0, 1, 2, 1,
                2, 0, 0, 0, 1]; 
    console.log("Array: ",arr);
    let n = arr.length; 
      
    // Function calling
    sortArr(arr, n);

//Time Complexity: O(n)
//Space Complexity: O(1)