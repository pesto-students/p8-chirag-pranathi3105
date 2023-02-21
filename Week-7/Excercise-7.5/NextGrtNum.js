function printNGE(arr, n)
      {
        var next, i, j;
        for (i = 0; i < n; i++) 
        {
          next = -1;
          for (j = i + 1; j < n; j++)
          {
            if (arr[i] < arr[j]) 
            {
              next = arr[j];
              break;
            }
          }
          console.log(arr[i] + " - " + next);
        }
      }
  
      var arr = [1,3,2,4];
      var n = arr.length;
      printNGE(arr, n);

      //tc:O(n^2)