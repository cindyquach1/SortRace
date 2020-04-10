var userArray = [];
var unsortedArray = ['4', '5', 'A', '6', '2', '7', 'B', '2', 'B', '6', '1', '4']
var sortedArr = [];
var result1 = [];
var left;
var right;

var left1 = [];
var right1 = [];
var mid1 = [];
var counter;

function mergeSort (unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    // Get the middle
    const middle = Math.floor(unsortedArray.length / 2);
    mid1.push(middle);

    // Dividing the array into left and right
    
    const left = unsortedArray.slice(0, middle);
    left1.push(left);

    const right = unsortedArray.slice(middle);
    right1.push(right);

    // Using recursion to combine the left and right
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

function merge(leftArr,rightArr) 
{
    var i = 0;
    var j = 0;
    counter = 0;
    var result = [];

    while (i < leftArr.length || j < rightArr.length) {
        if (i === leftArr.length) {
            result.push(rightArr[j]);
            j++;
            counter++;
        } 
      else if (j === rightArr.length || leftArr[i] <= rightArr[j]) {
            result.push(leftArr[i]);
            i++;
            counter++;
        } else {
            result.push(rightArr[j]);
            j++;
            counter++;
        }
    }

    result1.push(result);
    return result
        .concat(leftArr.slice(i))
        .concat(rightArr.slice(j));
    
}

$( document ).ready(function() {
    $("#runBtn").click(function() {

        var flag = 1;

        for (var i = 0; i < unsortedArray.length; i++)
        {
            var parseArray = unsortedArray[i] + "  ";
            $("#showUnsortedArray").append(parseArray);
        }

        sortedArr = mergeSort(unsortedArray);

        console.log('counter',counter-1);
        console.log('result1',result1);
        while (flag) {
            var i = 0;

            for(i; i < counter-1; i++) 
            {
                $('#mergesort1 tr').each(function(i) {
                    $(this).find('td').html(left1[i].join(' ') + " | " + right1[i].join(' '));
                });
                
                // $("#" + i).append(left1[i].join('  ') + " | " +  right1[i].join('  '));
            }
            
            for(var j = 0; j < result1.length; j++)
            {
                // $("#" + i).append(result1[j]);
                // i++;

                $('#mergesort2 tr').each(function(i) {
                    $(this).find('td').html(result1[i].join(' '));
                });
            }
            flag = 0;
        }

        for (var i = 0; i < sortedArr.length; i++)
        {
            var parseArray = sortedArr[i] + "  ";
            $("#showSortedArray").append(parseArray);
        }
    })
});

