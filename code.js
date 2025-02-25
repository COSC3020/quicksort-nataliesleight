function quicksort(array) {
    var n = array.length;
    if (n == 0 || n == 1) {return array;}
    qSort(array, 0, n - 1);
    return array;
}

function qSort(arr, low, high) {
    if (low < high) {
        var pi = partition(arr, low, high);
        qSort(arr, low, pi - 1);
        qSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
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
