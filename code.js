function quicksort(array)
    {   
        if (array.length == 0 || array.length == 1) {return array;}

        var low = 0;
        var high = array.length -1;

        var stack = new Array(high - low + 1);
        stack.fill(0);
        var top = -1;
        stack[++top] = low;
        stack[++top] = high;
 
        while (top >= 0) {
            high = stack[top--];
            low = stack[top--];
 
            var pivot = partition(array, low, high);
 
            if (pivot - 1 > low) {
                stack[++top] = low;
                stack[++top] = pivot - 1;
            }
 
            if (pivot + 1 < high) {
                stack[++top] = pivot + 1;
                stack[++top] = high;
            }
        }
        return array;
    }

function partition(arr, low, high)
    {
        var temp;
        var pivot = arr[high];
        var i = (low - 1);

        for (var j = low; j <= high - 1; j++) {
            if (arr[j] <= pivot) {
                i++;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
 
        temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
 
        return i + 1;
    }
