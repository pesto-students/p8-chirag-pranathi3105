// JavaScript Program to print a matrix spirally
  
function spiralPrint(m, n, arr) {
    let i, k = 0, l = 0, newArr =[];
    /*
        k - starting row index
        m - ending row index
        l - starting column index
        n - ending column index
        i - iterator  
    */
  
    while (k < m && l < n) {
        // print the first row from the remaining rows
        for (i = l; i < n; ++i) {
            newArr.push(arr[k][i]);
        }
        k++;
  
        // print the last column from the remaining columns
        for (i = k; i < m; ++i) {
            newArr.push(arr[i][n - 1]);
        }
        n--;
  
        // print the last row from the remaining rows
        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                newArr.push(arr[m - 1][i]);
            }
            m--;
        }
  
        // print the first column from the remaining columns
        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                newArr.push(arr[i][l]);
            }
            l++;
        }
    }
    return newArr
}
  
// function call
let arr = [[ 1, 2, 3],[ 4,5, 6],[ 7,8, 9]];
let r = arr.length;
let c = arr[0].length;
  
console.log(spiralPrint(r, c, arr));
  